'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FormSchema = z.object({
  type: z.string(),
});
interface IProps {
  switchTab: (tab: string) => void;
  listOfChains: string[];
}

const ChainSwitchTrigger = ({ switchTab, listOfChains }: IProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: listOfChains[0],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('');
  }

  return (
    <div className=" hidden">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-[100%] ">
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={value => {
                    field.onChange(value);
                    switchTab(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="capitalize">
                      <SelectValue placeholder="Select Chain" className="capitalize" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {listOfChains.map(item => (
                      <SelectItem key={item} value={item} className="capitalize">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default ChainSwitchTrigger;
