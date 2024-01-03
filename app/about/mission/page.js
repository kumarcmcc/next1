import Button from "@/app/Components/Button";
import Image from "next/image";
import ginzaiUnsen from "@/app/src/image/R.jpg";


export default function Mission() {
  return (
    <main className="mt-10">
        <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi fugit itaque delectus ipsum id amet voluptatem hic
                repellat, error corporis asperiores est perspiciatis tempora
                consequatur cupiditate soluta aperiam eos voluptates.
            </div>
            <div className="w-[400px]">
                <Image placeholder="blur" src={ginzaiUnsen} alt="Thumb image"/>
            </div>
            <Button />

    </main>
  )
}
