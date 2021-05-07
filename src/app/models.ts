export interface PuntajesModel {
    id?: number;
    nombre?: string;
    puntaje?: number;

}

export interface UsuariosModel{
    Id?: number;
    LastName?: string;
    FirstName?: string;
    UserName?: string;
    Password?: string;
    
}

export interface UsuariosSolicitudModel{
    id?: number;
    lastName?: string;
    firstName?: string;
    userName?: string;
    estado?: string;
   

}

export interface userLoggedModel{
    id?: number;
    lastName?: string;
    firstName?: string;
    userName?: string;
    password?: string;
    token?: string;
}

export interface LoginResult{
    
    userName?: string,
    token?: string;

}

export interface publicacionModel{
    id?: number;
    contenido?: string;
    userId?: number;
    cantidadLikes?: number;
    liked?: boolean;
}

export interface likeModel{
    likeId?: number,
    remitenteId?: number,
    publicacionId?: number
}

// export interface solicitudModel{
//     id?: number,
//     remitenteId?: number,
//     destinatarioId?: number,
//     estado?: string    
// }

export interface solicitudOneUserModel{
    remitenteId?: number,
    destinatarioId?: number,
    estado?: string    
}

export interface amigosModel{
    remitenteId?: number,
    destinatarioId?: number
}


export interface solicitudmodel{
    id?: number,
    remitenteId?: number,
    destinatarioId?: number,
    estado?: string    
}