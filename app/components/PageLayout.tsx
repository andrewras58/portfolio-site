import CloseButton from "./CloseButton";

const PageLayout = ({
  children,
  title,
  borderColor,
}: {
  children: React.ReactNode;
  title: string;
  borderColor: string;
}) => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div style={{'background': borderColor}} className="h-[80vh] w-[80vw] relative rounded-2xl p-2 md:p-5">
        <CloseButton />
        <div className='bg-[#f9f9f9] h-full w-full rounded-2xl p-1 overflow-auto flex flex-col items-center'>
          <h1 className="text-3xl font-semibold">{title}</h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
