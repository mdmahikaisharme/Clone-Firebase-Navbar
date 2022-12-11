import { iSidebarItem } from "@type/component/Sidebar.d";
import img from "@img";

const sidebar: Array<iSidebarItem> = [
    {
        name: "Introduction",
        href: "/introduction",
        icon: "iconOverview",
    },
    {
        name: "Build Your First App",
        href: "/build-your-first-app",
        icon: "iconAndroidOs",
    },
    {
        name: "Concept For Beginner",
        icon: "iconConcept",
        more: true,
        content: {
            name: "Concept For Beginner",
            list: [
                {
                    name: "Introduce",
                    href: "/-",
                    icon: "iconOverview",
                },
                {
                    name: "XML",
                    href: "/-",
                    icon: "iconXmlFile",
                },
                {
                    name: "PHP",
                    href: "/-",
                    icon: "iconPhp",
                },
                {
                    name: "MYSQL/SQLite",
                    href: "/-",
                    icon: "iconSql",
                },
                {
                    name: "JSON",
                    href: "/-",
                    icon: "iconJson",
                },
                {
                    name: "JAVA",
                    href: "/-",
                },
                {
                    name: "JAVASCRIPT",
                    href: "/-",
                    icon: "iconJavascript",
                },
            ],
        },
    },
    {
        name: "User Activities",
        icon: "iconUser",
        more: true,
        content: {
            name: "User Activities",
            list: [
                {
                    name: "Intent",
                    href: "/-",
                },
                {
                    name: "Dialog",
                    href: "/-",
                    icon: "iconError",
                },
                {
                    name: "Navigation Action Bar",
                    href: "/-",
                    icon: "iconMenu",
                },
                {
                    name: "Top Sheet",
                    href: "/-",
                    icon: "iconDataSheet",
                },
                {
                    name: "Bottom Sheet",
                    href: "/-",
                    icon: "iconDataSheet",
                },
                {
                    name: "Screen Overlay",
                    href: "/-",
                    icon: "iconOverlap",
                },
            ],
        },
    },
    {
        name: "Works with Views",
        icon: "iconViewColumn",
        more: true,
        content: {
            name: "Works with Views",
            dropdown: [
                {
                    name: "Basic Views",
                    icon: "iconViewColumn",
                    more: true,
                    content: [
                        {
                            name: "Text View",
                            href: "/-",
                            icon: "iconText",
                        },
                        {
                            name: "Image View",
                            href: "/-",
                            icon: "iconPicture",
                        },
                        {
                            name: "Button",
                            href: "/-",
                            icon: "iconButton",
                        },
                        {
                            name: "Image Button",
                            href: "/-",
                            icon: "iconButton",
                        },
                        {
                            name: "Switch",
                            href: "/-",
                            icon: "iconSwitches",
                        },
                        {
                            name: "Toggle Button",
                            href: "/-",
                            icon: "iconToggle",
                        },
                        {
                            name: "Check Box",
                            href: "/-",
                            icon: "iconCheckedRadioButton",
                        },
                        {
                            name: "Edit Text",
                            href: "/-",
                            icon: "iconDraw",
                        },
                        {
                            name: "Spinner",
                            href: "/-",
                        },
                        {
                            name: "Seek Bar",
                            href: "/-",
                        },
                        {
                            name: "Progress Bar",
                            href: "/-",
                            icon: "iconProgressbar95",
                        },
                        {
                            name: "Radio Group",
                            href: "/-",
                            icon: "iconCheckedRadioButton2",
                        },
                        {
                            name: "Video View",
                            href: "/-",
                            icon: "iconVideo",
                        },
                        {
                            name: "Table View",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Parent Views",
                    icon: "iconViewColumn",
                    more: true,
                    content: [
                        {
                            name: "Linear Layout",
                            href: "/-",
                            icon: "iconThickVerticalLine",
                        },
                        {
                            name: "Relative Layout",
                            href: "/-",
                            icon: "iconViewColumn",
                        },
                        {
                            name: "Frame Layout",
                            href: "/-",
                            icon: "iconFrame",
                        },
                        {
                            name: "Card View",
                            href: "/-",
                        },
                        {
                            name: "Scroll View",
                            href: "/-",
                        },
                        {
                            name: "Horizontal Scroll View",
                            href: "/-",
                        },
                        {
                            name: "Swipe Refresh Layout",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Widget Views",
                    more: true,
                    content: [
                        {
                            name: "Slider Image View",
                            href: "/-",
                        },
                        {
                            name: "Image Viewer View",
                            href: "/-",
                            icon: "iconPicture",
                        },
                        {
                            name: "Image Picker View",
                            href: "/-",
                            icon: "iconPicture",
                        },
                        {
                            name: "Popup Menu",
                            href: "/-",
                            icon: "iconPopup",
                        },
                        {
                            name: "Circle Menu",
                            href: "/-",
                        },
                        {
                            name: "Expandable Menu",
                            href: "/-",
                        },
                        {
                            name: "Expandable FAB",
                            href: "/-",
                        },
                        {
                            name: "Pager View",
                            href: "/-",
                            icon: "iconViewColumn",
                        },
                        {
                            name: "Tab View",
                            href: "/-",
                        },
                        {
                            name: "Rating View",
                            href: "/-",
                        },
                        {
                            name: "Rating Review",
                            href: "/-",
                        },
                        {
                            name: "Tool Bar",
                            href: "/-",
                        },
                        {
                            name: "Search Bar",
                            href: "/-",
                            icon: "iconSearch",
                        },
                        {
                            name: "Guage View",
                            href: "/-",
                        },
                        {
                            name: "Loading Indicator",
                            href: "/-",
                        },
                        {
                            name: "360 View",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Recycler View",
                    href: "/-",
                    icon: "iconMenu",
                    more: true,
                    content: [
                        {
                            name: "Recycler View",
                            href: "/-",
                        },
                        {
                            name: "Adapter",
                            href: "/-",
                        },
                        {
                            name: "Layout Manager",
                            href: "/-",
                        },
                        {
                            name: "Fast Scroll",
                            href: "/-",
                        },
                        {
                            name: "Several Samples",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Web View",
                    icon: "iconWeb",
                    more: true,
                    content: [
                        {
                            name: "Web View",
                            href: "/-",
                            icon: "iconWeb",
                        },
                        {
                            name: "Offline View Options",
                            href: "/-",
                        },
                        {
                            name: "Navigation Controller",
                            href: "/-",
                        },
                        {
                            name: "Url Bar",
                            href: "/-",
                        },
                        {
                            name: "JS Interface",
                            href: "/-",
                            icon: "iconJavascript",
                        },
                        {
                            name: "Web RTC",
                            href: "/-",
                        },
                        {
                            name: "Website to App",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Dragging",
                    href: "/dragging",
                },
            ],
        },
    },
    {
        name: "Activity Behavior",
        more: true,
        content: {
            name: "Activity Behavior",
            list: [
                {
                    name: "Toast",
                    href: "/-",
                },
                {
                    name: "Snack Bar",
                    href: "/-",
                },
                {
                    name: "Notification",
                    href: "/-",
                    icon: "iconBell",
                },
                {
                    name: "Play Sound",
                    href: "/-",
                },
                {
                    name: "Speak Text",
                    href: "/-",
                },
                {
                    name: "Make Vibration",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "Dialogs",
        icon: "iconError",
        more: true,
        content: {
            name: "Dialogs",
            dropdown: [
                {
                    name: "Basic Dialogs",
                    more: true,
                    content: [
                        {
                            name: "Alert Dialog",
                            href: "/-",
                        },
                        {
                            name: "Progress Dialog",
                            href: "/-",
                        },
                        {
                            name: "Spot Progress Dialog",
                            href: "/-",
                        },
                        {
                            name: "Input Dialog",
                            href: "/-",
                        },
                        {
                            name: "Chooser Dialog",
                            href: "/-",
                        },
                        {
                            name: "Multiple Selectable Dialog",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Picker Dialogs",
                    more: true,
                    content: [
                        {
                            name: "Country Code Picker",
                            href: "/-",
                        },
                        {
                            name: "Image Picker",
                            href: "/-",
                        },
                        {
                            name: "File Picker",
                            href: "/-",
                        },
                        {
                            name: "Color Picker",
                            href: "/-",
                        },
                        {
                            name: "Date Picker",
                            href: "/-",
                        },
                        {
                            name: "Time Picker",
                            href: "/-",
                        },
                        {
                            name: "Slide Date Picker",
                            href: "/-",
                        },
                        {
                            name: "Slide Time Picker",
                            href: "/-",
                        },
                    ],
                },
                {
                    name: "Special Dialogs",
                    icon: "iconError",
                    more: true,
                    content: [
                        {
                            name: "Speech To Text",
                            href: "/-",
                            icon: "iconText",
                        },
                        {
                            name: "Biometric Auth",
                            href: "/-",
                        },
                        {
                            name: "Pdf Viewer",
                            href: "/-",
                            icon: "iconPdf",
                        },
                        {
                            name: "Image Viewer",
                            href: "/-",
                            icon: "iconPicture",
                        },
                        {
                            name: "Camera Viewer",
                            href: "/-",
                            icon: "iconCamera",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Graphics",
        icon: "iconGraphics",
        more: true,
        content: {
            name: "Graphics",
            list: [
                {
                    name: "Color",
                    href: "/-",
                    icon: "iconColorDropper",
                },
                {
                    name: "Gradient",
                    href: "/-",
                },
                {
                    name: "icon",
                    href: "/-",
                },
                {
                    name: "Barcode",
                    href: "/-",
                },
                {
                    name: "Thumbnail",
                    href: "/-",
                },
                {
                    name: "On-Touch Style",
                    href: "/-",
                    icon: "iconTouch",
                },
                {
                    name: "Gradient Animation",
                    href: "/-",
                },
                {
                    name: "Transition Animation",
                    href: "/-",
                },
                {
                    name: "Splash View",
                    href: "/-",
                },
                {
                    name: "Bitmap Editing",
                    href: "/-",
                    icon: "iconPicture",
                },
                {
                    name: "Canvas",
                    href: "/-",
                    icon: "iconCanvas",
                },
            ],
        },
    },
    {
        name: "User's Information",
        icon: "iconUser",
        more: true,
        content: {
            name: "User's Information",
            dropdown: [
                {
                    name: "Contact List",
                    href: "/-",
                    icon: "iconPhone",
                },
                {
                    name: "SMS/MMS",
                    href: "/-",
                    icon: "iconSms",
                },
                {
                    name: "Call Log",
                    href: "/-",
                    icon: "iconPhone",
                },
                {
                    name: "Calender",
                    href: "/-",
                    icon: "iconCalculator",
                },
                {
                    name: "Phone Call",
                    href: "/-",
                    icon: "iconPhone",
                },
                {
                    name: "Microphone",
                    href: "/-",
                    icon: "iconMicrophone",
                },
                {
                    name: "Camera",
                    href: "/-",
                    icon: "iconCamera",
                },
                {
                    name: "Screen Projection",
                    href: "/-",
                },
                {
                    name: "Sensors",
                    href: "/-",
                    icon: "icon3dTouch",
                },
                {
                    name: "Location",
                    href: "/-",
                    icon: "iconLocation",
                },
                {
                    name: "Device Info",
                    href: "/-",
                    icon: "iconSmartphoneRam",
                },
                {
                    name: "Connectivity Usage",
                    href: "/-",
                    icon: "iconConnect",
                    more: true,
                    content: [
                        {
                            name: "Bluetooth",
                            href: "/-",
                            icon: "iconBluetooth",
                        },
                        {
                            name: "WiFi",
                            href: "/-",
                            icon: "iconWiFi",
                        },
                        {
                            name: "NFC",
                            href: "/-",
                        },
                        {
                            name: "Infrared",
                            href: "/-",
                        },
                        {
                            name: "IR",
                            href: "/-",
                        },
                        {
                            name: "USB",
                            href: "/-",
                            icon: "iconUsb2",
                        },
                        {
                            name: "Http",
                            href: "/-",
                            icon: "iconWeb",
                        },
                    ],
                },
                {
                    name: "Hardware Changes",
                    href: "/-",
                    icon: "iconSmartphoneRam",
                    more: true,
                    content: [
                        {
                            name: "Change Date-Time",
                            href: "/-",
                            icon: "iconCalendar",
                        },
                        {
                            name: "Bluetooth",
                            href: "/-",
                            icon: "iconBluetooth",
                        },
                        {
                            name: "WiFi",
                            href: "/-",
                            icon: "iconWiFi",
                        },
                        {
                            name: "Flash Light",
                            href: "/-",
                            icon: "iconCameraFlash",
                        },
                        {
                            name: "Volume",
                            href: "/-",
                        },
                        {
                            name: "Display",
                            href: "/-",
                        },
                        {
                            name: "Key Simulate",
                            href: "/-",
                        },
                        {
                            name: "Touch Simulate",
                            href: "/-",
                            icon: "iconTouch",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Database",
        icon: "iconDatabase",
        more: true,
        content: {
            name: "Database",
            list: [
                {
                    name: "Shared Preference",
                    href: "/-",
                    icon: "iconShare",
                },
                {
                    name: "SQLite Database",
                    href: "/-",
                    icon: "iconSql",
                },
                {
                    name: "Temp Variables",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "Event Listeners",
        icon: "iconEvent",
        more: true,
        content: {
            name: "Event Listeners",
            list: [
                {
                    name: "Broadcast Receiver",
                    href: "/-",
                },
                {
                    name: "Key Event",
                    href: "/-",
                },
                {
                    name: "Touch Event",
                    href: "/-",
                    icon: "icon3dTouch",
                },
                {
                    name: "Schedule Work",
                    href: "/-",
                },
                {
                    name: "Activity Event",
                    href: "/-",
                },
            ],
        },
    },
    {
        name: "File Options",
        icon: "iconFile",
        more: true,
        content: {
            name: "File Options",
            list: [
                {
                    name: "Read / Write",
                    href: "/-",
                    icon: "iconRead",
                },
                {
                    name: "Copy / Move / Delete / Rename",
                    href: "/-",
                    icon: "iconCopy",
                },
                {
                    name: "Zip / Unzip",
                    href: "/-",
                    icon: "iconZip",
                },
                {
                    name: "Encrypt / Decrypt",
                    href: "/-",
                    icon: "iconEncrypt",
                },
                {
                    name: "Upload / Download",
                    href: "/-",
                    icon: "iconUpload",
                },
                {
                    name: "Search",
                    href: "/-",
                    icon: "iconSearch",
                },
                {
                    name: "Print",
                    href: "/-",
                    icon: "iconPrint",
                },
            ],
        },
    },
    {
        name: "App Settings",
        href: "/-",
        icon: "iconSettings",
    },
    {
        name: "External Intent",
        href: "/-",
    },
    {
        name: "Chip Board",
        href: "/-",
        icon: "iconClipboard",
    },
    {
        name: "Device Admin",
        href: "/-",
    },
    {
        name: "Artificial Intelligences",
        icon: "iconAi",
        more: true,
        content: {
            name: "Artificial Intelligences",
            list: [
                {
                    name: "Touch Gesture",
                    href: "/-",
                    icon: "icon3dTouch",
                },
                {
                    name: "Sensor Gesture",
                    href: "/-",
                },
                {
                    name: "Face Recognition",
                    href: "/-",
                    icon: "iconFace",
                },
                {
                    name: "OCR",
                    href: "/-",
                },
                {
                    name: "Google Assistance",
                    href: "/-",
                    icon: "iconGoogle",
                },
            ],
        },
    },
    {
        name: "Object Oriented Program",
        icon: "iconObject",
        more: true,
        content: {
            name: "Object Oriented Program",
            list: [
                {
                    name: "Condition",
                    href: "/-",
                    icon: "iconConditionals1",
                },
                {
                    name: "Loop",
                    href: "/-",
                    icon: "iconLoop",
                },
                {
                    name: "Math",
                    href: "/-",
                    icon: "iconCalculator",
                },
                {
                    name: "Unit Converter",
                    href: "/-",
                    icon: "iconUnit",
                },
                {
                    name: "Data Encryption",
                    href: "/-",
                    icon: "iconEncrypt",
                },
            ],
        },
    },
    {
        name: "3rd-Party Interactive",
        more: true,
        content: {
            name: "3rd-Party Interactive",
            dropdown: [
                {
                    name: "Google Service",
                    icon: "iconGoogle",
                    more: true,
                    content: [
                        {
                            name: "Google Ad",
                            href: "/-",
                        },
                        {
                            name: "Google Translate",
                            href: "/-",
                            icon: "iconGoogleTranslate",
                        },
                        {
                            name: "Google Auth",
                            href: "/-",
                        },
                        {
                            name: "Google Drive",
                            href: "/-",
                            icon: "iconGoogleDrive",
                        },
                        {
                            name: "Google Pay",
                            href: "/-",
                        },
                        {
                            name: "Google Map",
                            href: "/-",
                            icon: "iconMap",
                        },
                    ],
                },
                {
                    name: "Firebase Service",
                    icon: "firebase",
                    more: true,
                    content: [
                        {
                            name: "Firebase Auth",
                            href: "/-",
                        },
                        {
                            name: "Firebase Notification",
                            href: "/-",
                            icon: "iconBell",
                        },
                        {
                            name: "Realtime Database",
                            href: "/-",
                        },
                        {
                            name: "Firebase Cloud",
                            href: "/-",
                        },
                    ],
                },
            ],
        },
    },
    {
        name: "Sample Projects",
        href: "/-",
    },
];

export default sidebar;
