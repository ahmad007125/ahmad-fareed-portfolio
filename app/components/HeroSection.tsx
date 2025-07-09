'use client'

import * as React from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {

    const boxRef = useRef(null);
    useEffect(() => {
        const el = boxRef.current;

        // Animation on page load
        gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Animation on scroll
        gsap.fromTo(
            el,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                trigger: el,
                start: "top 80%",
                },
            }
        );
    }, []);

    return(
        <div className="w-full flex items-center justify-between bg-body">
            <div ref={boxRef} className="container flex sm:flex-row flex-col items-center gap-2 py-8 md:py-16 lg:py-20 mx-auto px-4 xl:gap-4">
                <div className="hero-content flex flex-col gap-2 sm:w-1/2 w-full">
                    <a
                        href="/docs/components/calendar"
                        data-slot="badge"
                        className="w-max inline-flex items-center justify-center gap-1 rounded-full border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
                    >
                        New Calendar Component
                        <ArrowRight className="size-3 pointer-events-none" />
                    </a>
                    <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-foreground lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl xl:tracking-tighter">
                        Build your Component Library,,,
                    </h1>
                    <p className="max-w-3xl text-base font-normal text-muted-foreground sm:text-lg">
                        A set of beautifully-designed, accessible components and a code distribution
                        platform. Works with your favorite frameworks. Open Source. Open Code.
                    </p>
                    <div className="flex w-full items-center justify-start gap-2 pt-2">
                        <a
                        href="/docs/installation"
                        data-slot="button"
                        className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 transition-all"
                        >
                        Get Started
                        </a>
                        <a
                        href="/blocks"
                        data-slot="button"
                        className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2"
                        >
                        Browse Blocks
                        </a>
                    </div>
                </div>
                <div className="hero-img flex items-center justify-center sm:w-1/2 w-full">
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}