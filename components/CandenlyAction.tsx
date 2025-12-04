'use client';
import { PopupModal } from 'react-calendly';
import { useState, useEffect } from 'react'
import {ArrowRight, Phone} from "lucide-react";
import Link from "next/link";
export default function CalendlyButton({fromHeader, text}: { fromHeader?: boolean, text?: string}) {
    const [isOpen, setIsOpen] = useState(false)
    // Calendly's PopupModal expects `rootElement?: HTMLElement`.
    // Use `undefined` instead of `null` to satisfy the type.
    const [rootElement, setRootElement] = useState<HTMLElement | undefined>(undefined);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setRootElement(document.body); // or document.getElementById('__next') as HTMLElement
    }, []);
    return (
        <>
            {fromHeader && <button
                onClick={() => setIsOpen(true)}
                className="group cursor-pointer px-8 py-4 bg-gradient-to-r bg-primary  text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
            >
                Book a call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>}
            {!fromHeader && <button  onClick={() => setIsOpen(true)}
                                     className="w-full border border-gray-300 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Schedule Viewing
            </button>}
            {rootElement && (
                <PopupModal
                    url="https://calendly.com/bdipesh08/15min"
                    onModalClose={() => setIsOpen(false)}
                    open={isOpen}
                    rootElement={rootElement}
                />
            )}
        </>
    );
}
