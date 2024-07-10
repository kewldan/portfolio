'use client';

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Pencil, Plus, Trash} from "lucide-react";
import React, {useCallback, useState} from "react";
import {
    Project,
    ProjectCategory,
    ProjectConnection,
    ProjectConnectionIcon,
    ProjectLanguage,
    ProjectLocalization,
    ProjectMonetization,
    ProjectStatus
} from "@prisma/client";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {createProject, editProject} from "@/lib/api";
import {Checkbox} from "@/components/ui/checkbox";
import {ScrollArea} from "./ui/scroll-area";
import {Label} from "./ui/label";

const projectCategories = [
    'GAME',
    'SOFTWARE',
    'BOT',
    'WEB',
    'LIBRARY',
];

const projectLocalizations = [
    'RU',
    'EN'
];

const projectLanguages = [
    'PYTHON',
    'CPP',
    'TYPESCRIPT'
];

const projectStatuses = [
    'PLANNED',
    'WIP',
    'ABANDONED',
    'RELEASED',
    'INTERRUPTED',
    'PAUSED'
];

const projectMonetizations = [
    'NONE',
    'ADS',
    'SUBSCRIPTION',
    'PURCHASE'
];

const projectDifficulties = [
    'EASIEST',
    'EASY',
    'NORMAL',
    'HARD',
    'IMPOSSIBLE'
];

const orojectConnectionIcons = [
    'GITHUB',
    'CONTACT',
    'TELEGRAM',
    'DOCS',
    'OPEN',
    'ITCH'
]

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    category: z.custom<ProjectCategory>(val => projectCategories.includes(val)),
    localization: z.custom<ProjectLocalization>(val => projectLocalizations.includes(val)),
    language: z.custom<ProjectLanguage>(val => projectLanguages.includes(val)),
    difficulty: z.custom(val => projectDifficulties.includes(val)),
    description: z.string().min(6).max(400),
    status: z.custom<ProjectStatus>(val => projectStatuses.includes(val)),
    monetization: z.custom<ProjectMonetization>(val => projectMonetizations.includes(val)),
    primary: z.boolean(),
    connections: z.array(z.object({
        type: z.custom<ProjectConnectionIcon>(val => orojectConnectionIcons.includes(val)),
        href: z.string().url()
    })),
    image: z.any()
})

export default function ProjectModal({item}: { item?: Project & { connections: ProjectConnection[] } }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            difficulty: item && projectDifficulties[item.difficulty],
            title: item?.title || '',
            description: item?.description || '',
            localization: item?.localization,
            monetization: item?.monetization,
            status: item?.status,
            language: item?.language,
            category: item?.category,
            primary: item ? item.primary : false,
            image: null
        }
    });

    const [connections, setConnections] = useState<{
        icon: ProjectConnectionIcon;
        href: string;
    }[]>(item ? item.connections.map(c => ({icon: c.icon, href: c.href})) : []);
    const [connectionIcon, setConnectionIcon] = useState<string>('');
    const [connectionHref, setConnectionHref] = useState<string>('');

    const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
        if (item) {
            await editProject(item.id, {
                ...values,
                connections,
                difficulty: projectDifficulties.indexOf(values.difficulty)
            });
        } else {
            const reader = new FileReader();
            reader.readAsArrayBuffer(values.image);

            reader.onload = async () => {
                const buffer = Buffer.from(reader.result as Buffer);
                const b64 = buffer.toString('base64');

                await createProject({
                    ...values,
                    connections,
                    difficulty: projectDifficulties.indexOf(values.difficulty),
                    imageName: values.image.name,
                    image: b64
                });
            }
        }
    }, [item]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                {
                    item ? (
                        <Button size="icon" variant="outline" className="w-10">
                            <Pencil/>
                        </Button>
                    ) : (
                        <Button variant="outline">
                            <Plus className="mr-2 h-4 w-4"/> Create project
                        </Button>
                    )
                }
            </DialogTrigger>
            <DialogContent className='px-1'>
                <ScrollArea className='max-h-[75vh] px-3'>
                    <DialogHeader>
                        <DialogTitle>{item ? `Edit "${item.title}"` : 'Create project'}</DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 px-1">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project category"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectCategories.map(category => (
                                                        <SelectItem value={category}
                                                                    key={category}>{category}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="My awesome project" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea className="resize-none" {...field}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="image"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Image</FormLabel>
                                        <FormControl>
                                            <Input {...field} type='file' accept="image/*" value={field.value?.fileName}
                                                   onChange={(e) => field.onChange(e.target.files && e.target.files[0])}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="localization"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Localization</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project localization"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectLocalizations.map(localization => (
                                                        <SelectItem value={localization}
                                                                    key={localization}>{localization}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="monetization"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Monetization</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project monetization"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectMonetizations.map(monetization => (
                                                        <SelectItem value={monetization}
                                                                    key={monetization}>{monetization}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="language"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Category</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project language"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectLanguages.map(language => (
                                                        <SelectItem value={language}
                                                                    key={language}>{language}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="status"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project status"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectStatuses.map(status => (
                                                        <SelectItem value={status} key={status}>{status}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="difficulty"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Difficulty</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select project difficulty"/>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {
                                                    projectDifficulties.map(difficulty => (
                                                        <SelectItem value={difficulty}
                                                                    key={difficulty}>{difficulty}</SelectItem>
                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="primary"
                                render={({field}) => (
                                    <FormItem
                                        className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-3">
                                        <FormLabel>Primary</FormLabel>
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className='flex flex-row items-center gap-2 w-full'>
                                <Select onValueChange={setConnectionIcon}>
                                    <SelectTrigger className="w-32">
                                        <SelectValue placeholder="Select type"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            orojectConnectionIcons.map(icon => (
                                                <SelectItem value={icon} key={icon}>{icon}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                                <Input placeholder="Connection URL" onChange={v => setConnectionHref(v.target.value)}
                                       value={connectionHref}/>
                                <Button size="icon" className="w-24" onClick={() => {
                                    setConnections([...connections, {
                                        icon: connectionIcon as ProjectConnectionIcon,
                                        href: connectionHref
                                    }]);
                                }}>
                                    <Plus/>
                                </Button>
                            </div>
                            {
                                connections.length > 0 ? (
                                    <div className='w-full flex flex-col items-start gap-1'>
                                        <Label>
                                            Connections:
                                        </Label>
                                        <div className='w-full flex flex-col items-center gap-2'>
                                            {
                                                connections.map((connection, idx) => (
                                                    <div
                                                        className='border flex flex-row items-center w-full p-2 rounded-md justify-between'
                                                        key={`connection-${idx}-${connection.href}`}>
                                            <span>
                                                {connection.icon}
                                            </span>
                                                        <span>
                                                {connection.href}
                                            </span>
                                                        <Button size="icon" className="w-10" variant="destructive"
                                                                onClick={() => {
                                                                    setConnections(connections.filter(c => c.href !== connection.href));
                                                                }}>
                                                            <Trash/>
                                                        </Button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ) : (
                                    <span className='text-xs w-full text-center'>
                                        No project connections
                                    </span>
                                )
                            }
                            <DialogFooter>
                                <Button type="submit">
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}