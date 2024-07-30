import { Github } from 'lucide-react';
import * as React from "react";
import { Montserrat } from "next/font/google";
import Link from 'next/link'
const mont = Montserrat({
  weight: "900",
  subsets: ["latin"],
  style: "normal",
});

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import image from "@/assets/bgImg.jpeg";
import { Sparkle } from "lucide-react";

export default function CardWithForm(props: {
  title: string;
  description: string;
  image: string;
  lnk : string 
}) {
  return (
    <Card className="w-[300px]   transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg bg-white border-t-8 border-purple-500 border-l-8 ">
      <CardHeader>
        <div className="flex justify-center content-center items-center">
          <img className=" w-[300px]" src={props.image}  alt="Post Image" />
        </div>
      </CardHeader>
      <CardContent>
        <div className=" flex flex-row space-x-10">
        <CardTitle className={`${mont.className} text-purple-800 text-xl`}>{props.title}</CardTitle>
        
        </div>
        <CardDescription className="text-sm text-black mt-2">{props.description}</CardDescription>
      </CardContent>
     
      <CardFooter className="flex justify-between">
        <div className="flex flex-row justify-between items-center space-x-20">
          <div>
         
              <Button className=" space-x-2 bg-purple-700 hover:bg-purple-950"><Link href={props.lnk}>View Projects </Link></Button>
           
          </div>
         
        </div>
      </CardFooter>
    </Card>
  );
}
