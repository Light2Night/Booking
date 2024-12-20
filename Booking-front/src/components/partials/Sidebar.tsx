import {
    IconHome,
    IconBuilding,
    IconGlobe,
    IconBuildingSkyscraper,
    IconUserScan,
    IconUsers,
} from "@tabler/icons-react";
// import logo from "assets/ans-icon-144x144.png";
import SidebarChevronDown from "components/partials/sidebar/SidebarChevronDown.tsx";
import SidebarExpandCollapseButton from "components/partials/sidebar/SidebarExpandCollapseButton.tsx";
import SidebarLink from "components/partials/sidebar/SidebarLink.tsx";
import SidebarLinkGroup from "components/partials/sidebar/SidebarLinkGroup.tsx";
import SidebarLinkGroupMenu from "components/partials/sidebar/SidebarLinkGroupMenu.tsx";
import SidebarLinkGroupTitle from "components/partials/sidebar/SidebarLinkGroupTitle.tsx";
import { useLocation } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    const location = useLocation();
    const { pathname } = location;

    const { sidebarOpen, setSidebarOpen } = props;

    const trigger = useRef<HTMLButtonElement | null>(null);
    const sidebar = useRef<HTMLDivElement | null>(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
    );

    // Закривання при натисканні ззовні
    useEffect(() => {
        const clickHandler = (event: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (!sidebarOpen || sidebar.current.contains(event.target as Node) || trigger.current.contains(event.target as Node))
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [sidebarOpen, setSidebarOpen]);

    // Зберігання розгорнутого стану бічної панелі у localStorage
    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.body.classList.add("sidebar-expanded");
        } else {
            document.body.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <div>
            {/* Фон бічної панелі (тільки для мобільних) */}
            <div
                className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
                    sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden="true"
            ></div>

            {/* Бічна панель */}
            <div
                id="sidebar"
                ref={sidebar}
                className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-64"
                }`}
            >
                {/* Заголовок бічної панелі */}
                <div className="flex flex-col justify-between mb-10 pr-3 sm:px-2 gap-5">
                    {/* Кнопка закриття */}
                    <button
                        ref={trigger}
                        className="lg:hidden text-slate-500 hover:text-slate-400"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        aria-controls="sidebar"
                        aria-expanded={sidebarOpen}
                    >
                        <span className="sr-only">Close sidebar</span>
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
                        </svg>
                    </button>

                    {/* Посилання */}
                    <div className="space-y-8 -mx-2">
                        {/* Pages group */}
                        <div>
                            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                            </h3>
                            <ul className="mt-3">
                                {/* Головна */}
                                <SidebarLink
                                    to="/admin"
                                    icon={IconHome}
                                    label="Головна"
                                    activeCondition={(pathname) => pathname === "admin"}
                                />

                                {/* Готелі */}
                                <SidebarLinkGroup activecondition={pathname.includes("hotels")}>
                                    {(handleClick, open) => (
                                        <>
                                            <SidebarLinkGroupTitle
                                                href="#"
                                                icon={IconBuilding}
                                                isActive={pathname.includes("hotels")}
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                Готелі
                                                <SidebarChevronDown open={open} />
                                            </SidebarLinkGroupTitle>
                                            <SidebarLinkGroupMenu
                                                open={open}
                                                links={[
                                                    { to: "hotels/list", label: "Список" },
                                                ]}
                                            />
                                        </>
                                    )}
                                </SidebarLinkGroup>

                                {/* Країни */}
                                <SidebarLinkGroup activecondition={pathname.includes("countries")}>
                                    {(handleClick, open) => (
                                        <>
                                            <SidebarLinkGroupTitle
                                                href="#"
                                                icon={IconGlobe}
                                                isActive={pathname.includes("countries")}
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                Країни
                                                <SidebarChevronDown open={open} />
                                            </SidebarLinkGroupTitle>
                                            <SidebarLinkGroupMenu
                                                open={open}
                                                links={[
                                                    { to: "countries/list", label: "Список" },
                                                    { to: "countries/create", label: "Створити" },
                                                ]}
                                            />
                                        </>
                                    )}
                                </SidebarLinkGroup>

                                {/* Міста */}
                                <SidebarLinkGroup activecondition={pathname.includes("cities")}>
                                    {(handleClick, open) => (
                                        <>
                                            <SidebarLinkGroupTitle
                                                href="#"
                                                icon={IconBuildingSkyscraper}
                                                isActive={pathname.includes("cities")}
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                Міста
                                                <SidebarChevronDown open={open} />
                                            </SidebarLinkGroupTitle>
                                            <SidebarLinkGroupMenu
                                                open={open}
                                                links={[
                                                    { to: "cities/list", label: "Список" },
                                                    { to: "cities/create", label: "Створити" },
                                                ]}
                                            />
                                        </>
                                    )}
                                </SidebarLinkGroup>

                                 {/* Юзери */}
                                <SidebarLinkGroup activecondition={pathname.includes("user")}>
                                    {(handleClick, open) => (
                                        <>
                                            <SidebarLinkGroupTitle
                                                href="#"
                                                icon={IconUsers}
                                                isActive={pathname.includes("user")}
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                Користувачі
                                                <SidebarChevronDown open={open} />
                                            </SidebarLinkGroupTitle>
                                            <SidebarLinkGroupMenu
                                                open={open}
                                                links={[
                                                    { to: "users/customers/list", label: "Клієнти" },
                                                    { to: "users/realtors/list", label: "Ріелтори" },
                                                    { to: "users/createAdmin", label: "Створити Адміна" }
                                                ]}
                                            />
                                        </>
                                    )}
                                </SidebarLinkGroup>
                            </ul>
                        </div>

                        {/* Більше груп */}
                        <div>
                            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
                                <hr className={"lg:hidden lg:sidebar-expanded:block 2xl:block"}/>
                            </h3>
                            <ul className="mt-3">
                                {/* Авторизація */}
                                <SidebarLinkGroup activecondition={pathname.includes("auth")}>
                                    {(handleClick, open) => (
                                        <>
                                            <SidebarLinkGroupTitle
                                                href="#"
                                                icon={IconUserScan}
                                                isActive={pathname.includes("auth")}
                                                handleClick={(e) => {
                                                    e.preventDefault();
                                                    sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                                                }}
                                            >
                                                Авторизація
                                                <SidebarChevronDown open={open} />
                                            </SidebarLinkGroupTitle>
                                            <SidebarLinkGroupMenu open={open} links={[{ to: "/auth/login", label: "Вхід" }]} />
                                            <SidebarLinkGroupMenu open={open} links={[{ to: "/auth/register", label: "Реєстрація" }]} />
                                        </>
                                    )}
                                </SidebarLinkGroup>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Expand / collapse button */}
                <SidebarExpandCollapseButton sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />
            </div>
        </div>
    );
};

export default Sidebar;
