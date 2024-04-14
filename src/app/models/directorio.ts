import { environment } from "src/environments/environment";

const base_url = environment.apiUrlMedia;
export class Directorio {
    id: number;
    nombre: string;
    surname: string;
    especialidad: any;
    universidad: any;
    ano: string;
    org: string;
    website: string;
    email: string;
    direccion: string;
    direccion1: string;
    estado: string;
    ciudad: string;
    telefonos: string;
    tel1: string;
    telhome: string;
    telmovil: string;
    telprincipal: string;
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    vcard: string;
    created_at: Date;
    avatar:string;
    user_id:number;
    // status:string;

    status?: 'PUBLISHED'| 'PENDING' | 'REJECTED';


    get imagenUrl(){

        if(!this.avatar){
          return `${base_url}/directories/no-image.jpg`;
        } else if(this.avatar.includes('https')){
          return this.avatar;
        } else if(this.avatar){
          return `${base_url}/directories/${this.avatar}`;
        }else {
          return `${base_url}/no-image.jpg`;
          // return `./assets/img/no-image.jpg`;
        }

      }
}

// const PUBLISHED = 'PUBLISHED';
//     const PENDING = 'PENDING';
//     const REJECTED = 'REJECTED';


