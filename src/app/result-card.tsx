import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ResultCardProps {
    resultData: {
        vibrasi: number;
        temperatur: number;
        kebisingan: number;
        arus: number;
        tegangan: number;
        tekananAir: number;
    }
}

export const ResultCard: React.FC<ResultCardProps> = ({
    resultData
}) => {
    console.log(resultData)
    return (
        <Card className="w-72">
            <CardHeader>
                <CardTitle>Result</CardTitle>
                <CardDescription>Deskripsi</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <p>Vibrasi = {resultData.vibrasi}</p>
                    <p>Temperatur = {resultData.temperatur}</p>
                    <p>Kebisingan = {resultData.kebisingan}</p>
                    <p>Arus = {resultData.arus}</p>
                    <p>Tegangan = {resultData.tegangan}</p>
                    <p>Tekanan Air = {resultData.tekananAir}</p>
                </div>
            </CardContent>
        </Card>
    )
}