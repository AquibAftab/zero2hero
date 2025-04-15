'use client'

import {useState, useCallback, useEffect} from 'react'
import {MapPin, Upload, CheckCircle,Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {GoogleGenerativeAI} from '@google/generative-ai'
import { useJsApiLoader } from '@react-google-maps/api'
import { Libraries } from '@react-google-maps/api'
import { useRouter } from 'next/navigation' 

import {toast} from 'react-hot-toast'

const geminiApi = process.env.GEMINI_API_KEY as any
const googleMapsApikey=process.env.GOOGLE_MAPS_API_KEY as any;

const libraries: Libraries = ['places']

export default function ReportPage() {
    const [user, setUser] = useState('')
    const router = useRouter()
    const [reports, setReports] = useState<
    Array<{
        id:number;
        location:string;
        wasteType:string;
        amount: string;
        createdAt: string;
    }>
    >([]);

const [newReport, setNewReport] = useState({
    location: "",
    type: "",
    amount: "",
    });

    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    
    const [verifcationStatus, setVerificationStatus] = useState<"idle"| "verifying"| "sucess" | "failure">("idle");

    const [verificationResult, setverificationResult] = useState<{
        wasteType: string;
        quantity: string;
        confidence: number;
    } | null > (null)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox | null>(null);
    
    const {isLoaded} = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: googleMapsApikey,
        libraries: libraries,
    })

    const onLoad = useCallback((ref: google.maps.places.SearchBox) => {
        setSearchBox(ref)
    }
    , [])
    const onPlacesChanged = () => {
        if(searchBox){
           const places = searchBox.getPlaces()
              if(places && places.length > 0){
                const place = places[0]
                setNewReport(prev => ({
                    ...prev,
                     location: place.formatted_address || "",
                    }));
            }
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        if(e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0]
            setFile(selectedFile)
            const reader = new FileReader()
            reader.onload = (e) => {
                setPreview(e.target?.result as string)
            }
            reader.readAsDataURL(selectedFile)
        }
     const readFileasBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {   
            const reader = new FileReader()
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = () => reject;
            reader.readAsDataURL(file)
        })
    }
    const handleVerify = async () => {
        if(!file) return;
        setVerificationStatus("verifying")

        try{

        }
        catch(e){

        }
}       
}
}


