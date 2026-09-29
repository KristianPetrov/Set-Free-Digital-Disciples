import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

const logoPath = path.join(process.cwd(), "public/brand/set-free-logo-social.png");

export async function socialImage({ title = "Bold websites.", subtitle = "Real purpose.", screenshot }: {
  title?: string;
  subtitle?: string;
  screenshot?: string;
} = {}) {
  const [logo, screen] = await Promise.all([
    readFile(logoPath),
    screenshot ? readFile(path.join(process.cwd(), "public", screenshot.replace(/^\//, ""))) : undefined,
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const screenSrc = screen ? `data:image/${screen[0] === 0x89 ? "png" : "jpeg"};base64,${screen.toString("base64")}` : undefined;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#050b12", color: "#f2f7fa", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "radial-gradient(ellipse at 80% 50%, #0a353f 0%, #050b12 65%)" }} />
      <div style={{ position: "absolute", right: 40, top: 10, display: "flex", flexDirection: "column", opacity: .12, color: "#3dff7a", fontSize: 18, letterSpacing: 10, lineHeight: 2 }}>
        <span>0101 ｱ 1010 ﾂ 0101</span><span>ｵ 0100 ﾈ 1010 ｱ 01</span><span>1010 ｸ 0101 ﾉ 1010</span><span>ｱ 0110 ﾂ 1100 ｳ 01</span>
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 58px", width: screenSrc ? 580 : 680 }}>
        <div style={{ display: "flex", fontSize: 17, color: "#67e8f9", letterSpacing: 3 }}>SET FREE DIGITAL DISCIPLES</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: screenSrc ? 52 : 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.06 }}>{title}</div>
          <div style={{ display: "flex", marginTop: 18, fontSize: screenSrc ? 22 : 62, color: "#67e8f9", fontWeight: 600, letterSpacing: -1, lineHeight: 1.1 }}>{subtitle}</div>
          <div style={{ display: "flex", marginTop: 30, maxWidth: 480, fontSize: 23, lineHeight: 1.5, color: "#abbccf" }}>Custom websites. Clear messaging. Technical SEO. Guided by faith.</div>
        </div>
        <div style={{ display: "flex", fontSize: 20, color: "#8ba3b8" }}>setfreedigitaldisciples.com</div>
      </div>
      {screenSrc ? (
        <div style={{ display: "flex", position: "relative", flex: 1, alignItems: "center", paddingRight: 46 }}>
          <img src={screenSrc} alt="" width={570} height={365} style={{ objectFit: "cover", objectPosition: "top", borderRadius: 12, border: "1px solid #2c6671" }} />
          <img src={logoSrc} alt="" width={130} height={138} style={{ position: "absolute", right: 42, bottom: 30, objectFit: "contain" }} />
        </div>
      ) : <img src={logoSrc} alt="" width={455} height={490} style={{ position: "absolute", right: 36, top: 70, objectFit: "contain" }} />}
    </div>,
    { width: 1200, height: 630 },
  );
}
