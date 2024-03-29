'use client'
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import { format } from 'date-fns';
  import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
  import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
import { useState, useEffect } from 'react'
   
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];
   
  const TABLE_HEAD = ["Codigo", "Nombre", "Cedula", "DAN", "Licencia","Clase","Fecha Expedicion","Fecha Actualizacion","Vigencia","solicita","Rol","estadoSolicitud","editar"];

  interface DatosUsuario {
    codigo: string;
    DAN: string;
    cedula: string;
    clase: string;
    createdAt: string;
    email: string;
    estadoSolicitud: string;
    fechaActualizacion: string;
    fechaExpedicion: string;
    licencia: string;
    nombre: string;
    password: string;
    role: string;
    solicita: string;
    updatedAt: string;
    vigencia: string;
  }
  function DataTkwd() {
    const [data, setData] = useState<Array<DatosUsuario> | null>(null);
    const [isLoading, setLoading] = useState(true)

  useEffect(() => {

  const efec =process.env.NEXT_PUBLIC_API_URL;
  console.log("data;",efec);
  fetch(`${efec}trainer/`)
  .then((res) => res.json())
  .then((data) => {
    setData(data.dataUsers)
    setLoading(false)
    console.log("data:",data)
  })
  }, [])


  
    return (
      <Card placeholder={undefined} className="h-full w-full">
        <CardHeader placeholder={undefined} floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography placeholder={undefined}  variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography placeholder={undefined}  color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button placeholder={undefined} variant="outlined" size="sm">
                view all
              </Button>
              <Button placeholder={undefined}  className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader placeholder={undefined}>
                {TABS.map(({ label, value }) => (
                  <Tab placeholder={undefined} key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                crossOrigin={undefined}
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody placeholder={undefined} className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      placeholder={undefined} 
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {data && data.map(({
                codigo,
                DAN,
                cedula,
                clase,
                createdAt,
                email,
                estadoSolicitud,
                fechaActualizacion,
                fechaExpedicion,
                licencia,
                nombre,
                password,
                role,
                solicita,
                updatedAt,
                vigencia
              }, index) => {
                const isLast = index === data.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              
                fechaActualizacion
                return (
                  <tr key={nombre}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {codigo}
                          </Typography>
                         
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {nombre}
                          </Typography>
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal opacity-70">
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {cedula}
                          </Typography>
                       
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {DAN}
                          </Typography>
                      
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {licencia}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {clase}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {fechaExpedicion}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {fechaActualizacion}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>

                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {vigencia}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {solicita}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
                            {role}
                          </Typography>
                        
                        </div>
                      </div>
                    </td>
              
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                        
                          variant="ghost"
                          size="sm"
                          value={estadoSolicitud ? "Entregado" : "No entregado"}
                          color={estadoSolicitud ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>

                    <td className={classes}>
                      <Tooltip placeholder={undefined} content="Edit User">
                        <IconButton placeholder={undefined} variant="text">
                          <PencilIcon  className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                  
                );
              })}

            </tbody>
          </table>
        </CardBody>
        <CardFooter placeholder={undefined} className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography placeholder={undefined} variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button placeholder={undefined} variant="outlined" size="sm">
              Previous
            </Button>
            <Button placeholder={undefined} variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  export default DataTkwd;