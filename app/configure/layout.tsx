import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import { StepperComponent } from "@/components/Steps";
import { ReactNode } from "react";

const UploadLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <StepperComponent />
      {children}
    </MaxWidthWrapper>
  );
};

export default UploadLayout;
