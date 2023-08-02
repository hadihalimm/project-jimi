import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"

export const checkVibrasi = (vibrasi: number) => {
    if (vibrasi >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (vibrasi >= 6 && vibrasi <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (vibrasi > 0 && vibrasi <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}

export const checkTemperatur = (temperatur: number) => {
    if (temperatur >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (temperatur >= 6 && temperatur <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (temperatur > 0 && temperatur <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}

export const checkKebisingan = (kebisingan: number) => {
    if (kebisingan >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (kebisingan >= 6 && kebisingan <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (kebisingan > 0 && kebisingan <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}

export const checkArus = (arus: number) => {
    if (arus >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (arus >= 6 && arus <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (arus > 0 && arus <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}

export const checkTegangan = (tegangan: number) => {
    if (tegangan >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (tegangan >= 6 && tegangan <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (tegangan > 0 && tegangan <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}

export const checkTekananAir = (tekananAir: number) => {
    if (tekananAir >= 10) {
        return (
            <div className="flex items-center text-red-600 ml-2">
                <XCircle />
                BAHAYA
            </div>
        )
    } else if (tekananAir >= 6 && tekananAir <= 9) {
        return (
            <div className="flex items-center text-orange-400 ml-2">
                <AlertCircle />
                WASPADA
            </div>
        )
    } else if (tekananAir > 0 && tekananAir <=5) {
        return (
            <div className="flex items-center text-green-600 ml-2">
                <CheckCircle2 />
                AMAN
            </div>
        )
    } else {
        return (
            <div className="flex items-center text-black font-semibold ml-2">
                INVALID
            </div>
        )
    }
}