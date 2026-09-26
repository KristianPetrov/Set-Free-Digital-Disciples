export const contactEmail = "kristpetrov@setfreedigitaldisciples.com";
export const contactPhoneDisplay = "949-331-4471";
export const contactPhoneE164 = "+19493314471";

const scheduleMessage = "Hi Krist, I would like to schedule a call.";

export const textToScheduleHref = `sms:${contactPhoneE164}?body=${encodeURIComponent(scheduleMessage)}`;

export const emailHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Schedule a call")}&body=${encodeURIComponent(scheduleMessage)}`;
