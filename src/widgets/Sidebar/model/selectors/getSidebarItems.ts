import {createSelector} from "@reduxjs/toolkit";
import {getProfileData} from "entities/Profile";
import {SidebarItemType} from "../types/SidebarItemType";
import {routePath} from "app/providers/AppRouter";

export const getSidebarItems = createSelector(getProfileData, (profileData) => {
    const sidebarItems: SidebarItemType[] = []

    if (profileData) {
        sidebarItems.push({
            path: routePath.main,
            title: 'Main'
        })

        sidebarItems.push({
            path: routePath.users,
            title: 'Users'
        })

        sidebarItems.push({
            path: routePath.hosts,
            title: 'Hosts'
        })
    }

    return sidebarItems
})