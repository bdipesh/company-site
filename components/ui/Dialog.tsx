"use client"

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface DialogProps {
    open: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

export default function Dialog({ open, onClose, title, children }: DialogProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const dialogRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === 'Escape') onClose()
        }
        if (open) {
            document.addEventListener('keydown', onKeyDown)
            // prevent background scroll
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = ''
        }
    }, [open, onClose])

    useEffect(() => {
        if (open) {
            // Focus the dialog for accessibility
            setTimeout(() => dialogRef.current?.focus(), 0)
        }
    }, [open])

    if (!open) return null

    return createPortal(
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 flex items-center justify-center"
            aria-modal="true"
            role="dialog"
            onMouseDown={(e) => {
                if (e.target === overlayRef.current) onClose()
            }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div
                ref={dialogRef}
                tabIndex={-1}
                className="relative z-10 p-6 w-full max-w-lg mx-4 bg-white rounded-xl shadow-xl focus:outline-none"
            >
                <div className="flex items-center justify-between ">
                    <h3 className="text-lg font-semibold">  <span className="">{title}</span>  </h3>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="p-2 rounded hover:bg-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div className=" pt-4 overflow-y-scroll">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}
