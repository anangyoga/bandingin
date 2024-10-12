import React from "react";

const GeneratorHeader = ({ userData }) => {
  async function logout() {
    await prisma.session.delete({
      where: {
        id: sessionId,
      },
    });

    await cookies().delete("sessionId");

    redirect("/login");
  }
  return (
    <div className="flex items-center justify-between border border-x-0 bg-white px-4 py-4 sm:px-6">
      <h1 className="text-xl font-semibold">Halo!! {userData.user.name}</h1>
      <form action={logout}>
        <button className="w-fit rounded-lg border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:opacity-90 focus:bg-blue-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
          Logout
        </button>
      </form>
    </div>
  );
};

export default GeneratorHeader;
