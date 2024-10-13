import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function POST(req) {
  const { email, password } = await req.json();

  // Cek apakah user dengan email tersebut ada
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // Jika user tidak ditemukan atau bukan admin, kirim status 401 (Unauthorized)
  if (!user || user.role !== "admin") {
    return new Response("Unauthorized", { status: 401 });
  }

  // Verifikasi password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Jika login sukses, buat session
  const session = await prisma.session.create({
    data: {
      userId: user.id,
    },
  });

  // Simpan sessionId ke cookies
  (await cookies()).set("sessionId", session.id);

  // Redirect ke dashboard admin
  redirect("/admin");
}
