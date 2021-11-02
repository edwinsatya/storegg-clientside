interface ObjStepItem {
  icon: "/icon/step1.svg" | "/icon/step2.svg" | "/icon/step3.svg";
  title: string;
  desc1: string;
  desc2: string;
}

export const LIST_STEP_ITEM: ObjStepItem[] = [
  {
    icon: "/icon/step1.svg",
    title: "1. Start",
    desc1: "Pilih salah satu game",
    desc2: "yang ingin kamu top up",
  },
  {
    icon: "/icon/step2.svg",
    title: "2. Fill Up",
    desc1: "Top up sesuai dengan",
    desc2: "nominal yang sudah tersedia",
  },
  {
    icon: "/icon/step3.svg",
    title: "3. Be a Winner",
    desc1: "Siap digunakan untuk",
    desc2: "improve permainan kamu",
  },
];
