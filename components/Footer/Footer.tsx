import LinksHolder from "@/components/Footer/LinksHolder"
import { supportLinks, serviceLinks, aboutLinks, mediaLinks } from "@/components/Footer/data"
import Link from "next/link"
const Footer = () => {
  return (
    <div className='w-full bg-black text-white p-8'>
        <div className='flex flex-wrap'>
            <div className='p-4 w-full min-w-[340px] md:w-1/3'>
            <p className='mb-5 border-b-2 pb-5 font-bold'>Subscribe to Aesop communications</p>
            <form className='mb-5'>
            <input type="text" placeholder="Type here" className="input input-ghost w-full" />
            </form>
            <div className='flex'>
                <div className='mr-4'>
                <input type='checkbox' className='input-ghost'></input>
                </div>
                <p className='font-light'>
Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
            </div>
            </div>
            <LinksHolder heading="Orders and support" data={supportLinks}/>
            <LinksHolder heading="Services" data={serviceLinks}/>
            <div className='p-4 w-1/2 min-w-[200px] md:w-1/4'>
            <p className='mb-5 border-b-2 pb-5 font-bold'>Location preferences</p>
              <div className='mb-10'>
                <p className="mb-2">Shipping:</p>
              <Link href="/shipping" className="underline">Hong Kong SAR, China</Link>
              </div>
              <div className=''>
                <p className="mb-2">Language::</p>
                <div>
                <Link href="/language" className="underline">English</Link>
                </div>
              <div>
              <Link href="/language" className="">繁體中文</Link>
              </div>
              </div>
            </div>

            <div className='p-4 w-full min-w-[340px] md:w-1/3'>
            <p className='mb-5 border-b-2 pb-5 font-bold'>Sustainability</p>
            <div className='flex'>
            <p className='font-light'>
Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our privacy policy.</p>
            </div>
            </div>

            <LinksHolder heading="About" data={aboutLinks}/>
            <LinksHolder heading="Social media" data={mediaLinks}/>
        </div>
    </div>
  )
}

export default Footer