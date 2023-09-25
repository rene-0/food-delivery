import Image from "next/image"

export function Review() {
  return (
    <div className="bg-primary-200 w-96 shadow-lg rounded p-5 mr-5">
      <div className="flex items-center mb-3">
        <Image className="w-16 h-16 mr-3 rounded-full" src="/user.jpg" alt="User" width={100} height={100} />
        <p className="text-2xl font-bold text-secondary-950/70">Fulano da Silva</p>
      </div>
      <div>
        <p className="font-medium text-secondary-950/70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum doloribus, accusantium vero similique esse et dicta magni laboriosam
          fuga animi ipsum, architecto nobis rem repellat consequuntur reiciendis sed. Aliquid.
        </p>
      </div>
    </div>
  )
}
