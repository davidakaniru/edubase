import Link from "next/link";

const Announcement = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between ">
        <h1 className="font-semibold text-lg">Announcements</h1>
        <Link
          href={"/list/announcement"}
          className="text-xs text-gray-400 hover:text-primary"
        >
          view all
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/*  */}
        <div className="bg-foreground rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400">01-01-2025</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm rounded-mx p-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            optio.
          </p>
        </div>
        {/*  */}
        <div className="bg-accent rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400">01-01-2025</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm rounded-mx p-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            optio.
          </p>
        </div>
        {/*  */}
        <div className="bg-foreground rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-dark">Lorem, ipsum dolor.</h2>
            <span className="text-xs text-gray-400">01-01-2025</span>
          </div>
          <p className="mt-2 text-gray-500 text-sm rounded-mx p-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
