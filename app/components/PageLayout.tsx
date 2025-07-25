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
      <div style={{'background': borderColor}} className="h-[90vh] w-[90vw] relative rounded-2xl p-2 md:p-4">
        <CloseButton />
        <div className='bg-[#f9f9f9] h-full w-full rounded-2xl p-1 overflow-auto flex flex-col items-center'>
          <h1 className="md:text-5xl text-3xl font-semibold">{title}</h1>
          {children}
        </div>
      </div>
    </main>
  );
};

export default PageLayout;
