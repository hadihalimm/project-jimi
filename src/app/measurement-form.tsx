"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, ReactNode, useState } from "react";
import { ResultCard } from "./result-card";
import { checkArus, checkKebisingan, checkTegangan, checkTekananAir, checkTemperatur, checkVibrasi } from "./condition";

const measurementFormSchema = z.object({
  vibrasi: z.coerce.number(),
  temperatur: z.coerce.number(),
  kebisingan: z.coerce.number(),
  arus: z.coerce.number(),
  tegangan: z.coerce.number(),
  tekananAir: z.coerce.number(),
});

export const MeasurementForm = () => {

  const [vibrasi, setVibrasi] = useState("")
  const [temperatur, setTemperatur] = useState("")
  const [kebisingan, setKebisingan] = useState("")
  const [arus, setArus] = useState("")
  const [tegangan, setTegangan] = useState("")
  const [tekananAir, setTekananAir] = useState("")
  const [showResult, setShowResult] = useState(false)
  const [resultValue, setResultValue] = useState<z.infer<typeof measurementFormSchema>>({
    vibrasi: 0,
    temperatur: 0,
    kebisingan: 0,
    arus: 0,
    tegangan: 0,
    tekananAir: 0
  })

  const form = useForm<z.infer<typeof measurementFormSchema>>({
    resolver: zodResolver(measurementFormSchema),
    defaultValues: {
      vibrasi: 0,
      temperatur: 0,
      kebisingan: 0,
      arus: 0,
      tegangan: 0,
      tekananAir: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof measurementFormSchema>) => {
    setResultValue(values)
    setShowResult(true)
    console.log(values)
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-3"
        >
          <FormField
            control={form.control}
            name="vibrasi"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Vibrasi</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} />
                    {showResult && checkVibrasi(resultValue.vibrasi)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="temperatur"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Temperatur</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} />
                    {showResult && checkTemperatur(resultValue.temperatur)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="kebisingan"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Kebisingan</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} className="" />
                    {showResult && checkKebisingan(resultValue.kebisingan)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="arus"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Arus</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} className="" />
                    {showResult && checkArus(resultValue.arus)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tegangan"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Tegangan</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} className="" />
                    {showResult && checkTegangan(resultValue.tegangan)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tekananAir"
            render={({ field }) => (
              <FormItem className="border-2 rounded-md p-3">
                <FormLabel>Tekanan air</FormLabel>
                <FormControl>
                  <div className="flex flex-row justify-start items-center">
                    <Input {...field} className="" />
                    {showResult && checkTekananAir(resultValue.tekananAir)}
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

            <Button type="submit" className="col-span-2 mt-4 items-center w-28">
              Calculate
            </Button>
        </form>
      </Form>

      {showResult && 
      <ResultCard resultData={resultValue} />}
    </>
  );
};
