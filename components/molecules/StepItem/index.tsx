import Image from "next/image";

interface dataStepItem {
  icon: "/icon/step1.svg" | "/icon/step2.svg" | "/icon/step3.svg";
  title: string;
  desc1: string;
  desc2: string;
}

export interface StepItemProps {
  dataStep: dataStepItem;
}

export default function StepItem(props: StepItemProps) {
  const { dataStep } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <div className="mb-30">
          <Image src={dataStep.icon} width={80} height={80} alt="step item" />
        </div>
        <p className="fw-semibold text-2xl mb-2 color-palette-1">
          {dataStep.title}
        </p>
        <p className="text-lg color-palette-1 mb-0">
          {dataStep.desc1}
          <br />
          {dataStep.desc2}
        </p>
      </div>
    </div>
  );
}
