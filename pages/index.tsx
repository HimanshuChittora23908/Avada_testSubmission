import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import buick from '../public/img/buick_enclave.jpg'
import buick2 from '../public/img/buick_enclave_2.webp' 
import mini from '../public/img/mini_convertible.webp'
import mini2 from '../public/img/mini_convertible_2.jpg'
import xc90 from '../public/img/xc90.jpg'
import xc902 from '../public/img/xc90_2.jpg'
import taurus from '../public/img/taurus.jpg'
import taurus2 from '../public/img/taurus_2.jpg'
import xc60 from '../public/img/xc60.jpg'
import xc602 from '../public/img/xc60_2.jpg'
import h2 from '../public/img/h2.jpg'
import h22 from '../public/img/h2_2.jpg'
import sierra from '../public/img/sierra.webp'
import sierra2 from '../public/img/sierra_2.jpg'
import canyon from '../public/img/canyon.webp'
import canyon2 from '../public/img/canyon_2.jpg'
import outback from '../public/img/outback.jpg'
import outback2 from '../public/img/outback_2.webp'
import outlander from '../public/img/outlander.jpg'
import outlander2 from '../public/img/outlander_2.jpg'
import ram_van from '../public/img/ram_van.jpg'
import ram_van2 from '../public/img/ram_van_2.jpg'
import pathfinder from '../public/img/pathfinder.jpg'
import pathfinder2 from '../public/img/pathfinder_2.webp'
import Image from "next/image";
import Link from "next/link"
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Data {
  id : number
  year : number
  make : string
  model : string
  type : string
  img_thumb : StaticImageData
  description : string
  img: StaticImageData
  price : number
  review: string
}

export const data: Data[] = 
  [  
    {"id":9582,
    "year":2008,
    "make":"Buick",
    "model":"Enclave",
    "type":"SUV",
    "img_thumb": buick,
    "description": "The Buick Enclave is a mid/full-size three-row crossover SUV launched in 2007 for 2008 model year. The Enclave, the Saturn Outlook, the GMC Acadia, and the Chevrolet Traverse all share the GM Lambda platform. The Enclave was previewed at the 2006 North American International Auto Show, officially as a concept car, making it the first Lambda vehicle to be displayed. The Enclave is partially based on the Buick Centieme concept shown at the 2003 Detroit Auto Show. The Enclave is positioned somewhere between mainstream and entry-level luxury brands. That means it's more expensive than models such as the Chevrolet Traverse (which it's related to) and the Honda Pilot but not as expensive as an Acura MDX or Audi Q7. The Enclave replaced both of Buick's SUVs, the minivan-based Rendezvous and the truck-based Rainier, as well as the Terraza minivan. In 2014, the Enclave was the top-ranked Affordable Midsize SUV in U.S. News & World Report. The second-generation Enclave was officially revealed at the 2017 New York Auto Show.",
    "img": buick2,
    "price": 2910000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9583,
    "year":2006,
    "make":"MINI",
    "model":"Convertible",
    "type":"Convertible",
    "img_thumb": mini,
    "description": "BMW India has finally launched their first Mini product of the year, the Mini Cooper Convertible at Rs 34.90 lakh (ex-showroom). The updated version embraces quite a number of changes with the most important being the revised electrically operated roof-top. The soft-top is now smoother to operate at up to speed of 30kmph and the retraction time is shortened to 18 seconds, as compared to the previous version. Moreover, there is inclusion of roll-over protection system that is deployed as soon as it senses a possible roll-over. In terms of specs, 2016 Mini Cooper Convertible will get 1.5-litre diesel and 1.5-litre petrol units that are capable of generating respective power outputs of 116bhp and 134bhp, mated to 6-speed manual or auto gearbox.",
    "img": mini2,
    "price": 4400000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9584,
    "year":2019,
    "make":"Volvo",
    "model":"XC90",
    "type":"SUV",
    "img_thumb": xc90,
    "description": "Volvo has revealed the refreshed XC90, which is set to go into production in May 2019. With the new model, the luxury carmaker has also introduced mild-hybrid tech. The 2019 XC90 features a new grille and new wheels. On the inside, Volvo will now offer 6-seat layout as well. We already know that the Excellence plug-in hybrid variant of the XC90 will enter local assembly (India) by the end of 2019. Volvo XC90 Variants and Price: The Volvo XC90 is available in five variants: Momentum, R-Design, Inscription, T8 Inscription and Excellence. Prices start from Rs 77.41 lakh and go up to Rs 1.31 crore (all prices ex-showroom pan-India). Volvo XC90 Engine: The Volvo XC90 can be had either with a 2.0-litre diesel engine or a 2.0-litre petrol hybrid engine. While the diesel engine makes 235PS of maximum power and 480Nm of torque, the petrol hybrid is good for 400PS/640Nm. Power from both the engines is sent to all four wheels via an 8-speed automatic transmission. Volvo XC90 Features: The XC90, being a Volvo, is packed with safety features such as seven airbags, radar-based adaptive cruise control, lane keeping assist, collision avoidance (front and rear) and city braking system, blind spot detection with cross traffic alert and run-off road protection. Other features on offer include a panoramic sunroof, four-zone climate control, powered front seats with massage function, air suspension, 12.3-inch all-digital instrument cluster and a 9-inch touchscreen infotainment system with a Bower and Wilkins sound system.",
    "img": xc902,
    "price": 8889000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9585,
    "year":1999,
    "make":"Ford",
    "model":"Taurus",
    "type":"Sedan, Wagon",
    "img_thumb": taurus,
    "description": "The Ford Taurus is an automobile that was manufactured by the Ford Motor Company in the United States from the 1986 to 2019 model years. Introduced in late 1985 for the 1986 model year, six generations were produced over 34 years; a brief hiatus was undertaken between 2006 and 2007. From the 1986 to 2009 model years, the Taurus was sold alongside its near-twin, the Mercury Sable; four generations of the high-performance Ford Taurus SHO were produced (1989–1999; 2010–2019). The Taurus also served as the basis for the first-ever front-wheel drive Lincoln Continental (1988–2002). The original Taurus was a milestone for Ford and the entire American automotive industry, being the first automobile at Ford designed and manufactured using the statistical process control ideas brought to Ford by W. Edwards Deming, a prominent statistician consulted by Ford to bring a culture of quality to the enterprise. The Taurus had an influential design that brought many new features and innovations to the marketplace In the late 1990s and early 2000s, sales of the Taurus declined as it lost market share to Japanese midsize sedans and as Ford shifted resources towards developing SUVs. The Taurus was withdrawn after the 2007 model year, with production ending on October 27, 2006 As part of a model line revision, the Taurus and the larger Ford Crown Victoria were to be replaced with the full-size Five Hundred and mid-size Fusion sedans; the Taurus station wagon would be replaced with the Ford Freestyle wagon, branded as a crossover SUV.",
    "img": taurus2,
    "price": 3626000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9586,
    "year":2020,
    "make":"Volvo",
    "model":"XC60",
    "type":"SUV",
    "img_thumb": xc60,
    "description": "Volvo has updated the XC60 with a mild facelift that gets minor cosmetic updates at the front and a new Android-powered infotainment system. It is expected to launch in India by late 2021. Volvo XC60 is available in India in a single trim - Inscription, priced at Rs 59.9 lakh (ex-showroom pan-India). The new XC60 is based on the same, Scalable Product Architecture (SPA) platform as the XC90 and also borrows design elements and a lot of features from its elder sibling. It features new LED headlamps and redesigned 'Thor's Hammer' LED DRLs that extend up to the grille. On the rear end, it has the Volvo's signature L-shaped tail-light cluster with LED lights. Step inside and you'll see a 12.3-inch touchscreen infotainment system on the centre console. It also features a four-zone climate control system and has aircon controls for the rear passengers too. Initially, it'll be imported as CBUs and will be later assembled at its Bengaluru facility. It is expected to be priced around the Rs 60 lakh mark and will compete with the likes of the Audi Q5, BMW X3, Mercedes-Benz GLC and the Lexus NX.",
    "img": xc602,
    "price": 6089000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9587,
    "year":2006,
    "make":"HUMMER",
    "model":"H2",
    "type":"SUV, Pickup",
    "img_thumb": h2,
    "description": "The Hummer H2 is a large SUV that was marketed by Hummer and built in the AM General facility under contract from General Motors from 2002 to 2009. It is based on a modified GMT820 Chevrolet 2500 HD in front and 1500 frame in back. A four-door pickup truck version with a midgate that opens the vehicle's interior to the external cargo bed was introduced for 2005 as the H2 SUT (sport utility truck).",
    "img": h22,
    "price": 7500000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9588,
    "year":2016,
    "make":"GMC",
    "model":"Sierra 1500 Crew Cab",
    "type":"Pickup",
    "img_thumb": sierra,
    "description": "The GMC Sierra 1500 is a full-size pickup truck and one of the most popular vehicles in America. Like all modern trucks, the Sierra 1500 is just as good at hauling a family as it is a bed full of gravel. It has a spacious cabin, a full complement of driver aids, and a wide range of available engines, from a fuel-efficient four-cylinder to a muscular 6.2-liter V8. There's even the complicated but surprisingly useful MultiPro tailgate that can be used as a table or folded down as a step up to the bed. Like its corporate twin, the Chevrolet Silverado, the Sierra competes in one of the toughest segments in the market. Rivals include the fully redesigned Ford F-150 — the Edmunds Top Rated Truck for 2021 — and the Ram 1500. These trucks edge out the Sierra with their more premium interior designs and more comfortable rides. Then there's the Silverado, which offers nearly everything the Sierra does but at a slightly lower price. Still, this is an undeniably capable truck. Check out our in-depth Expert Rating to learn more about our take on the 2021 Sierra.",
    "img": sierra2,
    "price": 4000000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9589,
    "year":2008,
    "make":"GMC",
    "model":"Canyon Crew Cab",
    "type":"Pickup",
    "img_thumb": canyon,
    "description": "Mechanically similar to the Chevrolet Colorado, the GMC Canyon has struggled to establish its own identity in the midsize pickup truck segment. For 2021, GMC looks to change that, and it gives the top of the line Denali enhanced cabin materials and a new grille reminiscent of the one on the full-size Sierra 1500 pickup. There's also a new AT4 trim level. It's mostly just a replacement for the previous All Terrain trim level, but it does come with all-terrain tires and a special suspension to improve the truck's off-road capability. Both speak to the truck's versatility, provided you're looking to buy a Canyon in one of its more expensive trims.",
    "img": canyon2,
    "price": 2000000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9590,
    "year":2016,
    "make":"Subaru",
    "model":"Outback",
    "type":"SUV",
    "img_thumb": outback,
    "description": "The Subaru Outback, also sold as Subaru Legacy Outback (Japanese: スバル・レガシィアウトバック, Hepburn: Subaru Regashi Autobakku) in some markets, is an automotive nameplate used by the Japanese automaker Subaru for two different vehicles: a Legacy-based station wagon, the Outback (1994–present), and an Impreza-derived hatchback, the Outback Sport (1994–2011). Most versions of the Outback wagon and Outback Sport have had all-wheel drive as either an option or standard equipment.",
    "img": outback2,
    "price": 2915000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9591,
    "year":2010,
    "make":"Mitsubishi",
    "model":"Outlander",
    "type":"SUV",
    "img_thumb": outlander,
    "description": "Mitsubishi Outlander launch and bookings: Mitsubishi has launched its third-generation Outlander at Rs 31.95 lakh (ex-showroom, Mumbai). Read the complete launch report to know more. The 2018 Mitsubishi Outlander is powered by a 2.4-litre petrol engine that is mated to a CVT with 6-speed paddle shift operation. The engine puts out 167PS of max power and 221Nm of peak torque, nearly identical to the second-gen model that Mitsubishi used to sell in India (discontinued in 2012). The Mitsubishi Outlander will be offered in a single variant, packing seven airbags, HSA (hill start assist), ABS (anti-lock braking system) with EBD (electronic brake-force distribution) and ASC (active stability control) with TCL (traction control logic). Also offered are panoramic sunroof, 7-inch touchscreen infotainment system, 710W Rockford Fosgate sound system, LED head and tail lamps, DRLs and dual-zone climate control. The 2018 Outlander goes up against the upcoming fifth-gen Honda CR-V, Skoda Kodiaq and the Volkswagen Tiguan. ",
    "img": outlander2,
    "price": 2693000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9592,
    "year":1998,
    "make":"Dodge",
    "model":"Ram Van 1500",
    "type":"Van/Minivan",
    "img_thumb": ram_van,
    "description": "The Dodge B series was a range of full-size vans that were produced by Chrysler Corporation from 1970 to 2003. Through their production, the full-size vans were sold under several different nameplates. Most examples were sold by the Dodge division, although rebadged versions were sold by the now-defunct Fargo and Plymouth divisions. Despite many customer requests, the B-series was not available in the desired 360 V8 model until 1972. Although Chrysler would make two redesigns of the B-platform van, much of the exterior sheetmetal would remain nearly unchanged over 32 years of production, making it one of the longest-used automotive platforms in American automotive history. For 2003, DaimlerChrysler introduced the Dodge Sprinter (produced by Mercedes-Benz), making the B-platform van the last full-size van designed by Chrysler; Ram Trucks currently markets the Ram ProMaster (a rebadged Fiat Ducato). For its entire production run, Chrysler produced the B-platform vans at the now-demolished Pillette Road Truck Assembly plant in Windsor, Ontario, Canada.",
    "img": ram_van2,
    "price": 2411000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    {
    "id":9593,
    "year":2014,
    "make":"Nissan",
    "model":"Pathfinder",
    "type":"SUV",
    "img_thumb": pathfinder,
    "description": "The Nissan Pathfinder is a lineup of sport utility vehicles manufactured by Nissan since 1986, originally sharing Nissan's compact pickup truck platform, and now in its fourth generation. The Pathfinder was marketed as the Nissan Terrano (Japanese: 日産・テラノ, Nissan Terano) outside North America. Beginning in 2004, the R51 series was marketed internationally as the Pathfinder.",
    "img": pathfinder2,
    "price": 3132000,
    "review": " great wagon, and not just because it's one of the few remaining choices in the class. The It has an airy and upscale interior, comfy seats, and loads of cargo space. It comes packed with active safety features like forward collision warning and lane keep assist, and all-wheel drive is standard across the lineup. It also offers above-average fuel economy, respectable towing capability, and a zippy turbocharged engine option."
    },
    ]

const Home = () => {
  return (
    <div className={styles.card}>
      <h1 className="text-white font-bold text-center pt-8 lg:p-2 text-5xl lg:text-8xl">CarNex</h1>
      <h1 className="text-white font-semibold font-mono text-center text-lg lg:text-2xl italic pt-2 lg:pt-4 pb-8">Limited Edition Cars ...</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-8">
        {data.map(item => (
          <div key={item.id} className="bg-white opacity-90 pb-4 shadow-card rounded-xl p-0 flex flex-col items-center">
            <Image src={item.img_thumb} alt="car" className="rounded-t-xl object-cover" width="1600" height="900"></Image>
            <h1 className="font-bold text-2xl pt-2 lg:pt-4 lg:pb-2 font-ubuntu">{item.make} {item.model}</h1>
            <h1 className="font-medium text-md lg:text-lg text-gray-600">{item.year}</h1>
            <h1 className="font-medium text-md lg:text-lg text-gray-600 -mt-1">{item.type}</h1>
            <Link href={"/"+ item.id}><button className="flex justify-center bg-blue-600 gap-2 text-white w-32 font-bold shadow-button px-6 py-1 rounded-full mt-2 lg:mt-4 items-center">Visit<FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></button></ Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home;