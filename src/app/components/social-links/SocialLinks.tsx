import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled, WhatsAppOutlined, YoutubeFilled } from "@ant-design/icons"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex">
      <Link href="./">
        <LinkedinFilled className="text-3xl pr-3" />
      </Link>
      <Link href="./">
        <FacebookFilled className="text-3xl pr-3" />
      </Link>
      <Link href="./">
        <WhatsAppOutlined className="text-3xl pr-3" />
      </Link>
      <Link href="./">
        <InstagramFilled className="text-3xl pr-3" />
      </Link>
      <Link href="./">
        <TwitterCircleFilled className="text-3xl pr-3" />
      </Link>
      <Link href="./">
        <YoutubeFilled className="text-3xl pr-3" />
      </Link>
    </div>
  )
}
