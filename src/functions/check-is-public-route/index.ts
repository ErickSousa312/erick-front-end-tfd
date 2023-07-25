import {App_Routes} from '@/constants/app-routes'

/** 
 * @param asPath string
 * @return boolean
 *  */

export const checkIsPublicRoute = (asPath:string) =>{
    const appPublicRoutes = Object.values(App_Routes.public)

    return appPublicRoutes.includes(asPath)
}