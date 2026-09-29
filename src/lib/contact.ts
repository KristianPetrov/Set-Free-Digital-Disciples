export const contactEmail = "kristpetrov@setfreedigitaldisciples.com";
export const contactPhoneDisplay = "949-331-4471";
export const contactPhoneE164 = "+19493314471";

const scheduleMessage = "Hi Krist, I have a website idea I would like to talk through.";

export const textToScheduleHref = `sms:${contactPhoneE164}?body=${encodeURIComponent(scheduleMessage)}`;

export const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Let’s build a website")}&body=${encodeURIComponent(scheduleMessage)}`;
