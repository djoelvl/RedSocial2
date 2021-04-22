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

export interface userLoggedModel{
    id?: number;
    lastName?: string;
    firstName?: string;
    userName?: string;
    token?: string;
}

export interface LoginResult{
    
    userName?: string,
    token?: string;

}

export interface publicacionModel{
    publicacionId?: number;
    publicacionText?: string;
    userId?: number;
}