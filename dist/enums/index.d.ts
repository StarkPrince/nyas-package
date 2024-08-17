export declare enum ChatTypeEnum {
    TEXT = "text",
    IMAGE = "image",
    DOCUMENT = "document"
}
export declare enum SubTicketStatusEnum {
    ASSIGN_PENDING = "assign-pending",
    FE_PENDING = "fe-pending",
    APPROVAL_PENDING = "approval-pending",
    ONGOING = "ongoing",
    DRAFT = "draft",
    COMPLETED = "completed",
    PENDING = "pending"
}
export declare const validStatusOrder: SubTicketStatusEnum[];
export declare enum TicketStatusEnum {
    ASSIGN_PENDING = "assign-pending",
    FE_PENDING = "fe-pending",
    APPROVAL_PENDING = "approval-pending",
    ONGOING = "ongoing",
    DRAFT = "draft",
    COMPLETED = "completed",
    PENDING = "pending",
    ARCHIVED = "archived"
}
export declare enum Permission {
    VIEW_CLIENTS = "view_clients",
    CREATE_CLIENT = "create_client",
    MODIFY_CLIENT = "modify_client",
    DELETE_CLIENT = "delete_client",
    VIEW_CLIENT_CONTRACTS = "view_client_contracts",
    CREATE_CLIENT_CONTRACT = "create_client_contract",
    MODIFY_CLIENT_CONTRACT = "modify_client_contract",
    DELETE_CLIENT_CONTRACT = "delete_client_contract",
    VIEW_VENDORS = "view_vendors",
    CREATE_VENDOR = "create_vendor",
    MODIFY_VENDOR = "modify_vendor",
    DELETE_VENDOR = "delete_vendor",
    VIEW_VENDOR_CONTRACTS = "view_vendor_contracts",
    CREATE_VENDOR_CONTRACT = "create_vendor_contract",
    MODIFY_VENDOR_CONTRACT = "modify_vendor_contract",
    DELETE_VENDOR_CONTRACT = "delete_vendor_contract",
    VIEW_TICKETS = "view_tickets",
    CREATE_TICKET = "create_ticket",
    MODIFY_TICKET = "modify_ticket",
    MODIFY_TICKETS = "modify_tickets",
    ARCHIVE_TICKET = "archive_ticket",
    ARCHIVE_TICKETS = "archive_tickets",
    DELETE_TICKET = "delete_ticket",
    DELETE_TICKETS = "delete_tickets",
    VIEW_PRICES = "view_prices",
    VIEW_SUBTICKETS = "view_subtickets",
    CREATE_SUBTICKET = "create_subticket",
    MODIFY_SUBTICKET = "modify_subticket",
    UPDATE_SUBTICKET_STATUS = "update_ticket_status",
    ACCEPT_SUBTICKET = "accept_subticket",
    CANCEL_SUBTICKET = "cancel_subticket",
    VIEW_FIELD_ENGINEERS = "view_field_engineers",
    CREATE_FIELD_ENGINEER = "create_field_engineer",
    MODIFY_FIELD_ENGINEER = "modify_field_engineer",
    DELETE_FIELD_ENGINEER = "delete_field_engineer",
    VIEW_USERS = "view_users",
    CREATE_USER = "create_user",
    MODIFY_USER = "modify_user",
    DELETE_USER = "delete_user",
    CREATE_NOC_USER = "create_noc_user",
    READ_NOTIFICATIONS = "read_notifications",
    VIEW_NOTIFICATIONS = "view_notifications",
    VIEW_EXTENSIONS = "view_extensions",
    CREATE_EXTENSION = "create_extension",
    MODIFY_EXTENSION = "modify_extension",
    DELETE_EXTENSION = "delete_extension",
    VIEW_CHAT_MESSAGES = "view_chat_messages",
    CREATE_CHAT_MESSAGE = "create_chat_message",
    MODIFY_CHAT_MESSAGE = "modify_chat_message",
    DELETE_CHAT_MESSAGE = "delete_chat_message"
}
export declare enum UserRolesEnum {
    NOC = "noc",
    FIELD_ENGINEER = "fieldEngineer",
    MBA = "mba"
}
export declare const rolePermissions: {
    fieldEngineer: Permission[];
    noc: (Permission.VIEW_CLIENTS | Permission.CREATE_CLIENT | Permission.MODIFY_CLIENT | Permission.DELETE_CLIENT | Permission.VIEW_CLIENT_CONTRACTS | Permission.CREATE_CLIENT_CONTRACT | Permission.MODIFY_CLIENT_CONTRACT | Permission.DELETE_CLIENT_CONTRACT | Permission.VIEW_VENDORS | Permission.CREATE_VENDOR | Permission.MODIFY_VENDOR | Permission.DELETE_VENDOR | Permission.VIEW_VENDOR_CONTRACTS | Permission.CREATE_VENDOR_CONTRACT | Permission.MODIFY_VENDOR_CONTRACT | Permission.DELETE_VENDOR_CONTRACT | Permission.VIEW_TICKETS | Permission.CREATE_TICKET | Permission.MODIFY_TICKET | Permission.ARCHIVE_TICKET | Permission.DELETE_TICKET | Permission.VIEW_PRICES | Permission.VIEW_SUBTICKETS | Permission.CREATE_SUBTICKET | Permission.MODIFY_SUBTICKET | Permission.CANCEL_SUBTICKET | Permission.VIEW_FIELD_ENGINEERS | Permission.CREATE_FIELD_ENGINEER | Permission.MODIFY_FIELD_ENGINEER | Permission.DELETE_FIELD_ENGINEER | Permission.VIEW_USERS | Permission.CREATE_USER | Permission.MODIFY_USER | Permission.DELETE_USER | Permission.READ_NOTIFICATIONS | Permission.VIEW_NOTIFICATIONS | Permission.VIEW_EXTENSIONS | Permission.MODIFY_EXTENSION | Permission.DELETE_EXTENSION | Permission.VIEW_CHAT_MESSAGES | Permission.CREATE_CHAT_MESSAGE | Permission.MODIFY_CHAT_MESSAGE | Permission.DELETE_CHAT_MESSAGE)[];
    mba: (Permission.VIEW_CLIENTS | Permission.CREATE_CLIENT | Permission.MODIFY_CLIENT | Permission.DELETE_CLIENT | Permission.VIEW_CLIENT_CONTRACTS | Permission.CREATE_CLIENT_CONTRACT | Permission.MODIFY_CLIENT_CONTRACT | Permission.DELETE_CLIENT_CONTRACT | Permission.VIEW_VENDORS | Permission.CREATE_VENDOR | Permission.MODIFY_VENDOR | Permission.DELETE_VENDOR | Permission.VIEW_VENDOR_CONTRACTS | Permission.CREATE_VENDOR_CONTRACT | Permission.MODIFY_VENDOR_CONTRACT | Permission.DELETE_VENDOR_CONTRACT | Permission.VIEW_TICKETS | Permission.CREATE_TICKET | Permission.MODIFY_TICKET | Permission.MODIFY_TICKETS | Permission.ARCHIVE_TICKET | Permission.ARCHIVE_TICKETS | Permission.DELETE_TICKET | Permission.DELETE_TICKETS | Permission.VIEW_PRICES | Permission.VIEW_SUBTICKETS | Permission.CREATE_SUBTICKET | Permission.MODIFY_SUBTICKET | Permission.CANCEL_SUBTICKET | Permission.VIEW_FIELD_ENGINEERS | Permission.CREATE_FIELD_ENGINEER | Permission.MODIFY_FIELD_ENGINEER | Permission.DELETE_FIELD_ENGINEER | Permission.VIEW_USERS | Permission.CREATE_USER | Permission.MODIFY_USER | Permission.DELETE_USER | Permission.CREATE_NOC_USER | Permission.READ_NOTIFICATIONS | Permission.VIEW_NOTIFICATIONS | Permission.VIEW_EXTENSIONS | Permission.MODIFY_EXTENSION | Permission.DELETE_EXTENSION | Permission.VIEW_CHAT_MESSAGES | Permission.CREATE_CHAT_MESSAGE | Permission.MODIFY_CHAT_MESSAGE | Permission.DELETE_CHAT_MESSAGE)[];
};
export declare enum UpdateTicketEnum {
    AddTasks = "add-tasks",
    AddDocuments = "add-documents",
    AddCommunications = "add-communications",
    AddFieldEngineers = "add-fieldEngineers"
}
export declare enum UserStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Blocked = "blocked"
}
export declare enum ExtensionStatusEnum {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare enum ExtensionTypeEnum {
    Extension = "extension",
    Replacement = "replacement"
}
export declare enum BillingTypeEnum {
    Hourly = "hourly",
    Daily = "daily"
}
export declare enum FieldEngineerWorkStatusEnum {
    Checkin = "checkin",
    Checkout = "checkout",
    BreakStart = "break-start",
    BreakEnd = "break-end"
}
export declare enum TaskStatusEnum {
    Allocated = "allocated",
    Ongoing = "ongoing",
    Completed = "completed"
}
export declare enum ContractStatusEnum {
    Upcoming = "upcoming",
    Active = "active",
    Expired = "expired"
}
export declare enum CountryEnum {
    Afghanistan = "Afghanistan",
    Albania = "Albania",
    Algeria = "Algeria",
    Andorra = "Andorra",
    Angola = "Angola",
    AntiguaAndBarbuda = "Antigua and Barbuda",
    Argentina = "Argentina",
    Armenia = "Armenia",
    Australia = "Australia",
    Austria = "Austria",
    Azerbaijan = "Azerbaijan",
    Bahamas = "Bahamas",
    Bahrain = "Bahrain",
    Bangladesh = "Bangladesh",
    Barbados = "Barbados",
    Belarus = "Belarus",
    Belgium = "Belgium",
    Belize = "Belize",
    Benin = "Benin",
    Bhutan = "Bhutan",
    Bolivia = "Bolivia",
    BosniaAndHerzegovina = "Bosnia and Herzegovina",
    Botswana = "Botswana",
    Brazil = "Brazil",
    Brunei = "Brunei",
    Bulgaria = "Bulgaria",
    BurkinaFaso = "Burkina Faso",
    Burundi = "Burundi",
    CaboVerde = "Cabo Verde",
    Cambodia = "Cambodia",
    Cameroon = "Cameroon",
    Canada = "Canada",
    CentralAfricanRepublic = "Central African Republic",
    Chad = "Chad",
    Chile = "Chile",
    China = "China",
    Colombia = "Colombia",
    Comoros = "Comoros",
    Congo = "Congo",
    CostaRica = "Costa Rica",
    Croatia = "Croatia",
    Cuba = "Cuba",
    Cyprus = "Cyprus",
    Czechia = "Czechia",
    Denmark = "Denmark",
    Djibouti = "Djibouti",
    Dominica = "Dominica",
    DominicanRepublic = "Dominican Republic",
    Ecuador = "Ecuador",
    Egypt = "Egypt",
    ElSalvador = "El Salvador",
    EquatorialGuinea = "Equatorial Guinea",
    Eritrea = "Eritrea",
    Estonia = "Estonia",
    Eswatini = "Eswatini",
    Ethiopia = "Ethiopia",
    Fiji = "Fiji",
    Finland = "Finland",
    France = "France",
    Gabon = "Gabon",
    Gambia = "Gambia",
    Georgia = "Georgia",
    Germany = "Germany",
    Ghana = "Ghana",
    Greece = "Greece",
    Grenada = "Grenada",
    Guatemala = "Guatemala",
    Guinea = "Guinea",
    GuineaBissau = "Guinea-Bissau",
    Guyana = "Guyana",
    Haiti = "Haiti",
    Honduras = "Honduras",
    Hungary = "Hungary",
    Iceland = "Iceland",
    India = "India",
    Indonesia = "Indonesia",
    Iran = "Iran",
    Iraq = "Iraq",
    Ireland = "Ireland",
    Jamaica = "Jamaica",
    Japan = "Japan",
    Jordan = "Jordan",
    Kazakhstan = "Kazakhstan",
    Kenya = "Kenya",
    Kiribati = "Kiribati",
    Kosovo = "Kosovo",
    Kuwait = "Kuwait",
    Kyrgyzstan = "Kyrgyzstan",
    Laos = "Laos",
    Latvia = "Latvia",
    Lebanon = "Lebanon",
    Lesotho = "Lesotho",
    Liberia = "Liberia",
    Libya = "Libya",
    Liechtenstein = "Liechtenstein",
    Lithuania = "Lithuania",
    Luxembourg = "Luxembourg",
    Madagascar = "Madagascar",
    Malawi = "Malawi",
    Malaysia = "Malaysia",
    Maldives = "Maldives",
    Mali = "Mali",
    Malta = "Malta",
    MarshallIslands = "Marshall Islands",
    Mauritania = "Mauritania",
    Mauritius = "Mauritius",
    Mexico = "Mexico",
    Micronesia = "Micronesia",
    Moldova = "Moldova",
    Monaco = "Monaco",
    Mongolia = "Mongolia",
    Montenegro = "Montenegro",
    Morocco = "Morocco",
    Mozambique = "Mozambique",
    Myanmar = "Myanmar",
    Namibia = "Namibia",
    Nauru = "Nauru",
    Nepal = "Nepal",
    Netherlands = "Netherlands",
    NewZealand = "New Zealand",
    Nicaragua = "Nicaragua",
    Niger = "Niger",
    Nigeria = "Nigeria",
    NorthKorea = "North Korea",
    NorthMacedonia = "North Macedonia",
    Norway = "Norway",
    Oman = "Oman",
    Pakistan = "Pakistan",
    Palau = "Palau",
    Panama = "Panama",
    PapuaNewGuinea = "Papua New Guinea",
    Paraguay = "Paraguay",
    Peru = "Peru",
    Philippines = "Philippines",
    Poland = "Poland",
    Portugal = "Portugal",
    Qatar = "Qatar",
    Romania = "Romania",
    Russia = "Russia",
    Rwanda = "Rwanda",
    SaintKittsAndNevis = "Saint Kitts and Nevis",
    SaintLucia = "Saint Lucia",
    SaintVincentAndTheGrenadines = "Saint Vincent and the Grenadines",
    Samoa = "Samoa",
    SanMarino = "San Marino",
    SaoTomeAndPrincipe = "Sao Tome and Principe",
    SaudiArabia = "Saudi Arabia",
    Senegal = "Senegal",
    Serbia = "Serbia",
    Seychelles = "Seychelles",
    SierraLeone = "Sierra Leone",
    Singapore = "Singapore",
    Slovakia = "Slovakia",
    Slovenia = "Slovenia",
    SolomonIslands = "Solomon Islands",
    Somalia = "Somalia",
    SouthAfrica = "South Africa",
    SouthKorea = "South Korea",
    SouthSudan = "South Sudan",
    Spain = "Spain",
    SriLanka = "Sri Lanka",
    Sudan = "Sudan",
    Suriname = "Suriname",
    Sweden = "Sweden",
    Switzerland = "Switzerland",
    Syria = "Syria",
    Taiwan = "Taiwan",
    Tajikistan = "Tajikistan",
    Tanzania = "Tanzania",
    Thailand = "Thailand",
    TimorLeste = "Timor-Leste",
    Togo = "Togo",
    Tonga = "Tonga",
    TrinidadAndTobago = "Trinidad and Tobago",
    Tunisia = "Tunisia",
    Turkey = "Turkey",
    Turkmenistan = "Turkmenistan",
    Tuvalu = "Tuvalu",
    Uganda = "Uganda",
    Ukraine = "Ukraine",
    UnitedArabEmirates = "United Arab Emirates",
    UnitedKingdom = "United Kingdom",
    UnitedStates = "United States",
    Uruguay = "Uruguay",
    Uzbekistan = "Uzbekistan",
    Vanuatu = "Vanuatu",
    VaticanCity = "Vatican City",
    Venezuela = "Venezuela",
    Vietnam = "Vietnam",
    Yemen = "Yemen",
    Zambia = "Zambia",
    Zimbabwe = "Zimbabwe"
}
export declare enum CurrencyEnum {
    AED = "AED",
    AFN = "AFN",
    ALL = "ALL",
    AMD = "AMD",
    ANG = "ANG",
    AOA = "AOA",
    ARS = "ARS",
    AUD = "AUD",
    AWG = "AWG",
    AZN = "AZN",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BGN = "BGN",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BWP = "BWP",
    BYN = "BYN",
    BZD = "BZD",
    CAD = "CAD",
    CDF = "CDF",
    CHF = "CHF",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    CRC = "CRC",
    CUP = "CUP",
    CVE = "CVE",
    CZK = "CZK",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    EGP = "EGP",
    ERN = "ERN",
    ETB = "ETB",
    EUR = "EUR",
    FJD = "FJD",
    FKP = "FKP",
    FOK = "FOK",
    GBP = "GBP",
    GEL = "GEL",
    GGP = "GGP",
    GHS = "GHS",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GTQ = "GTQ",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HNL",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    ILS = "ILS",
    IMP = "IMP",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    JEP = "JEP",
    JMD = "JMD",
    JOD = "JOD",
    JPY = "JPY",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KID = "KID",
    KMF = "KMF",
    KRW = "KRW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGA = "MGA",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRU = "MRU",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MYR = "MYR",
    MZN = "MZN",
    NAD = "NAD",
    NGN = "NGN",
    NIO = "NIO",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PYG = "PYG",
    QAR = "QAR",
    RON = "RON",
    RSD = "RSD",
    RUB = "RUB",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDG = "SDG",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SLL = "SLL",
    SOS = "SOS",
    SRD = "SRD",
    SSP = "SSP",
    STN = "STN",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TJS = "TJS",
    TMT = "TMT",
    TND = "TND",
    TOP = "TOP",
    TRY = "TRY",
    TTD = "TTD",
    TVD = "TVD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGX = "UGX",
    USD = "USD",
    UYU = "UYU",
    UZS = "UZS",
    VES = "VES",
    VND = "VND",
    VUV = "VUV",
    WST = "WST",
    XAF = "XAF",
    XCD = "XCD",
    XDR = "XDR",
    XOF = "XOF",
    XPF = "XPF",
    YER = "YER",
    ZAR = "ZAR",
    ZMW = "ZMW",
    ZWL = "ZWL"
}
