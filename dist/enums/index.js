"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyEnum = exports.CountryEnum = exports.ContractStatusEnum = exports.TaskStatusEnum = exports.FieldEngineerWorkStatusEnum = exports.BillingTypeEnum = exports.ExtensionTypeEnum = exports.ExtensionStatusEnum = exports.UserStatusEnum = exports.UpdateTicketEnum = exports.rolePermissions = exports.UserRolesEnum = exports.Permission = exports.TicketStatusEnum = exports.validStatusOrder = exports.SubTicketStatusEnum = exports.ChatTypeEnum = void 0;
var ChatTypeEnum;
(function (ChatTypeEnum) {
    ChatTypeEnum["TEXT"] = "text";
    ChatTypeEnum["IMAGE"] = "image";
    ChatTypeEnum["DOCUMENT"] = "document";
})(ChatTypeEnum || (exports.ChatTypeEnum = ChatTypeEnum = {}));
var SubTicketStatusEnum;
(function (SubTicketStatusEnum) {
    SubTicketStatusEnum["ASSIGN_PENDING"] = "assign-pending";
    SubTicketStatusEnum["FE_PENDING"] = "fe-pending";
    SubTicketStatusEnum["APPROVAL_PENDING"] = "approval-pending";
    SubTicketStatusEnum["ONGOING"] = "ongoing";
    SubTicketStatusEnum["DRAFT"] = "draft";
    SubTicketStatusEnum["COMPLETED"] = "completed";
    SubTicketStatusEnum["PENDING"] = "pending";
})(SubTicketStatusEnum || (exports.SubTicketStatusEnum = SubTicketStatusEnum = {}));
exports.validStatusOrder = [
    SubTicketStatusEnum.ASSIGN_PENDING,
    SubTicketStatusEnum.FE_PENDING,
    SubTicketStatusEnum.APPROVAL_PENDING,
    SubTicketStatusEnum.ONGOING,
    SubTicketStatusEnum.COMPLETED,
];
var TicketStatusEnum;
(function (TicketStatusEnum) {
    TicketStatusEnum["ASSIGN_PENDING"] = "assign-pending";
    TicketStatusEnum["FE_PENDING"] = "fe-pending";
    TicketStatusEnum["APPROVAL_PENDING"] = "approval-pending";
    TicketStatusEnum["ONGOING"] = "ongoing";
    TicketStatusEnum["DRAFT"] = "draft";
    TicketStatusEnum["COMPLETED"] = "completed";
    TicketStatusEnum["PENDING"] = "pending";
    TicketStatusEnum["ARCHIVED"] = "archived";
})(TicketStatusEnum || (exports.TicketStatusEnum = TicketStatusEnum = {}));
var Permission;
(function (Permission) {
    // client permissions
    Permission["VIEW_CLIENTS"] = "view_clients";
    Permission["CREATE_CLIENT"] = "create_client";
    Permission["MODIFY_CLIENT"] = "modify_client";
    Permission["DELETE_CLIENT"] = "delete_client";
    // client contract permissions
    Permission["VIEW_CLIENT_CONTRACTS"] = "view_client_contracts";
    Permission["CREATE_CLIENT_CONTRACT"] = "create_client_contract";
    Permission["MODIFY_CLIENT_CONTRACT"] = "modify_client_contract";
    Permission["DELETE_CLIENT_CONTRACT"] = "delete_client_contract";
    // vendor permissions
    Permission["VIEW_VENDORS"] = "view_vendors";
    Permission["CREATE_VENDOR"] = "create_vendor";
    Permission["MODIFY_VENDOR"] = "modify_vendor";
    Permission["DELETE_VENDOR"] = "delete_vendor";
    // vendor contract permissions
    Permission["VIEW_VENDOR_CONTRACTS"] = "view_vendor_contracts";
    Permission["CREATE_VENDOR_CONTRACT"] = "create_vendor_contract";
    Permission["MODIFY_VENDOR_CONTRACT"] = "modify_vendor_contract";
    Permission["DELETE_VENDOR_CONTRACT"] = "delete_vendor_contract";
    // ticket permissions
    Permission["VIEW_TICKETS"] = "view_tickets";
    Permission["CREATE_TICKET"] = "create_ticket";
    Permission["MODIFY_TICKET"] = "modify_ticket";
    Permission["MODIFY_TICKETS"] = "modify_tickets";
    Permission["ARCHIVE_TICKET"] = "archive_ticket";
    Permission["ARCHIVE_TICKETS"] = "archive_tickets";
    Permission["DELETE_TICKET"] = "delete_ticket";
    Permission["DELETE_TICKETS"] = "delete_tickets";
    Permission["VIEW_PRICES"] = "view_prices";
    // subtickets permissions
    Permission["VIEW_SUBTICKETS"] = "view_subtickets";
    Permission["CREATE_SUBTICKET"] = "create_subticket";
    Permission["MODIFY_SUBTICKET"] = "modify_subticket";
    Permission["UPDATE_SUBTICKET_STATUS"] = "update_ticket_status";
    Permission["ACCEPT_SUBTICKET"] = "accept_subticket";
    Permission["CANCEL_SUBTICKET"] = "cancel_subticket";
    // field engineer permissions
    Permission["VIEW_FIELD_ENGINEERS"] = "view_field_engineers";
    Permission["CREATE_FIELD_ENGINEER"] = "create_field_engineer";
    Permission["MODIFY_FIELD_ENGINEER"] = "modify_field_engineer";
    Permission["DELETE_FIELD_ENGINEER"] = "delete_field_engineer";
    // user permissions
    Permission["VIEW_USERS"] = "view_users";
    Permission["CREATE_USER"] = "create_user";
    Permission["MODIFY_USER"] = "modify_user";
    Permission["DELETE_USER"] = "delete_user";
    Permission["CREATE_NOC_USER"] = "create_noc_user";
    // notification permissions
    Permission["READ_NOTIFICATIONS"] = "read_notifications";
    Permission["VIEW_NOTIFICATIONS"] = "view_notifications";
    // extension permissions
    Permission["VIEW_EXTENSIONS"] = "view_extensions";
    Permission["CREATE_EXTENSION"] = "create_extension";
    Permission["MODIFY_EXTENSION"] = "modify_extension";
    Permission["DELETE_EXTENSION"] = "delete_extension";
    // chat messages permissions
    Permission["VIEW_CHAT_MESSAGES"] = "view_chat_messages";
    Permission["CREATE_CHAT_MESSAGE"] = "create_chat_message";
    Permission["MODIFY_CHAT_MESSAGE"] = "modify_chat_message";
    Permission["DELETE_CHAT_MESSAGE"] = "delete_chat_message";
})(Permission || (exports.Permission = Permission = {}));
var UserRolesEnum;
(function (UserRolesEnum) {
    UserRolesEnum["NOC"] = "noc";
    UserRolesEnum["FIELD_ENGINEER"] = "fieldEngineer";
    UserRolesEnum["MBA"] = "mba";
})(UserRolesEnum || (exports.UserRolesEnum = UserRolesEnum = {}));
exports.rolePermissions = {
    [UserRolesEnum.FIELD_ENGINEER]: [
        Permission.VIEW_TICKETS,
        Permission.VIEW_SUBTICKETS,
        Permission.UPDATE_SUBTICKET_STATUS,
        Permission.ACCEPT_SUBTICKET,
        Permission.CANCEL_SUBTICKET,
        Permission.CREATE_EXTENSION,
        Permission.VIEW_CHAT_MESSAGES,
        Permission.CREATE_CHAT_MESSAGE,
        Permission.MODIFY_CHAT_MESSAGE,
        Permission.DELETE_CHAT_MESSAGE,
    ],
    [UserRolesEnum.NOC]: Object.values(Permission).filter((permission) => permission !== Permission.MODIFY_TICKETS &&
        permission !== Permission.CREATE_NOC_USER &&
        permission !== Permission.ARCHIVE_TICKETS &&
        permission !== Permission.DELETE_TICKETS &&
        permission !== Permission.ACCEPT_SUBTICKET &&
        permission !== Permission.UPDATE_SUBTICKET_STATUS &&
        permission !== Permission.CREATE_EXTENSION),
    [UserRolesEnum.MBA]: Object.values(Permission).filter((permission) => permission !== Permission.ACCEPT_SUBTICKET &&
        permission !== Permission.UPDATE_SUBTICKET_STATUS &&
        permission !== Permission.CREATE_EXTENSION),
};
var UpdateTicketEnum;
(function (UpdateTicketEnum) {
    UpdateTicketEnum["AddTasks"] = "add-tasks";
    UpdateTicketEnum["AddDocuments"] = "add-documents";
    UpdateTicketEnum["AddCommunications"] = "add-communications";
    UpdateTicketEnum["AddFieldEngineers"] = "add-fieldEngineers";
})(UpdateTicketEnum || (exports.UpdateTicketEnum = UpdateTicketEnum = {}));
var UserStatusEnum;
(function (UserStatusEnum) {
    UserStatusEnum["Active"] = "active";
    UserStatusEnum["Inactive"] = "inactive";
    UserStatusEnum["Blocked"] = "blocked";
})(UserStatusEnum || (exports.UserStatusEnum = UserStatusEnum = {}));
var ExtensionStatusEnum;
(function (ExtensionStatusEnum) {
    ExtensionStatusEnum["APPROVED"] = "approved";
    ExtensionStatusEnum["REJECTED"] = "rejected";
    ExtensionStatusEnum["PENDING"] = "pending";
})(ExtensionStatusEnum || (exports.ExtensionStatusEnum = ExtensionStatusEnum = {}));
var ExtensionTypeEnum;
(function (ExtensionTypeEnum) {
    ExtensionTypeEnum["Extension"] = "extension";
    ExtensionTypeEnum["Replacement"] = "replacement";
})(ExtensionTypeEnum || (exports.ExtensionTypeEnum = ExtensionTypeEnum = {}));
var BillingTypeEnum;
(function (BillingTypeEnum) {
    BillingTypeEnum["Hourly"] = "hourly";
    BillingTypeEnum["Daily"] = "daily";
})(BillingTypeEnum || (exports.BillingTypeEnum = BillingTypeEnum = {}));
var FieldEngineerWorkStatusEnum;
(function (FieldEngineerWorkStatusEnum) {
    FieldEngineerWorkStatusEnum["Checkin"] = "checkin";
    FieldEngineerWorkStatusEnum["Checkout"] = "checkout";
    FieldEngineerWorkStatusEnum["BreakStart"] = "break-start";
    FieldEngineerWorkStatusEnum["BreakEnd"] = "break-end";
})(FieldEngineerWorkStatusEnum || (exports.FieldEngineerWorkStatusEnum = FieldEngineerWorkStatusEnum = {}));
var TaskStatusEnum;
(function (TaskStatusEnum) {
    TaskStatusEnum["Allocated"] = "allocated";
    TaskStatusEnum["Ongoing"] = "ongoing";
    TaskStatusEnum["Completed"] = "completed";
})(TaskStatusEnum || (exports.TaskStatusEnum = TaskStatusEnum = {}));
var ContractStatusEnum;
(function (ContractStatusEnum) {
    ContractStatusEnum["Upcoming"] = "upcoming";
    ContractStatusEnum["Active"] = "active";
    ContractStatusEnum["Expired"] = "expired";
})(ContractStatusEnum || (exports.ContractStatusEnum = ContractStatusEnum = {}));
var CountryEnum;
(function (CountryEnum) {
    CountryEnum["Afghanistan"] = "Afghanistan";
    CountryEnum["Albania"] = "Albania";
    CountryEnum["Algeria"] = "Algeria";
    CountryEnum["Andorra"] = "Andorra";
    CountryEnum["Angola"] = "Angola";
    CountryEnum["AntiguaAndBarbuda"] = "Antigua and Barbuda";
    CountryEnum["Argentina"] = "Argentina";
    CountryEnum["Armenia"] = "Armenia";
    CountryEnum["Australia"] = "Australia";
    CountryEnum["Austria"] = "Austria";
    CountryEnum["Azerbaijan"] = "Azerbaijan";
    CountryEnum["Bahamas"] = "Bahamas";
    CountryEnum["Bahrain"] = "Bahrain";
    CountryEnum["Bangladesh"] = "Bangladesh";
    CountryEnum["Barbados"] = "Barbados";
    CountryEnum["Belarus"] = "Belarus";
    CountryEnum["Belgium"] = "Belgium";
    CountryEnum["Belize"] = "Belize";
    CountryEnum["Benin"] = "Benin";
    CountryEnum["Bhutan"] = "Bhutan";
    CountryEnum["Bolivia"] = "Bolivia";
    CountryEnum["BosniaAndHerzegovina"] = "Bosnia and Herzegovina";
    CountryEnum["Botswana"] = "Botswana";
    CountryEnum["Brazil"] = "Brazil";
    CountryEnum["Brunei"] = "Brunei";
    CountryEnum["Bulgaria"] = "Bulgaria";
    CountryEnum["BurkinaFaso"] = "Burkina Faso";
    CountryEnum["Burundi"] = "Burundi";
    CountryEnum["CaboVerde"] = "Cabo Verde";
    CountryEnum["Cambodia"] = "Cambodia";
    CountryEnum["Cameroon"] = "Cameroon";
    CountryEnum["Canada"] = "Canada";
    CountryEnum["CentralAfricanRepublic"] = "Central African Republic";
    CountryEnum["Chad"] = "Chad";
    CountryEnum["Chile"] = "Chile";
    CountryEnum["China"] = "China";
    CountryEnum["Colombia"] = "Colombia";
    CountryEnum["Comoros"] = "Comoros";
    CountryEnum["Congo"] = "Congo";
    CountryEnum["CostaRica"] = "Costa Rica";
    CountryEnum["Croatia"] = "Croatia";
    CountryEnum["Cuba"] = "Cuba";
    CountryEnum["Cyprus"] = "Cyprus";
    CountryEnum["Czechia"] = "Czechia";
    CountryEnum["Denmark"] = "Denmark";
    CountryEnum["Djibouti"] = "Djibouti";
    CountryEnum["Dominica"] = "Dominica";
    CountryEnum["DominicanRepublic"] = "Dominican Republic";
    CountryEnum["Ecuador"] = "Ecuador";
    CountryEnum["Egypt"] = "Egypt";
    CountryEnum["ElSalvador"] = "El Salvador";
    CountryEnum["EquatorialGuinea"] = "Equatorial Guinea";
    CountryEnum["Eritrea"] = "Eritrea";
    CountryEnum["Estonia"] = "Estonia";
    CountryEnum["Eswatini"] = "Eswatini";
    CountryEnum["Ethiopia"] = "Ethiopia";
    CountryEnum["Fiji"] = "Fiji";
    CountryEnum["Finland"] = "Finland";
    CountryEnum["France"] = "France";
    CountryEnum["Gabon"] = "Gabon";
    CountryEnum["Gambia"] = "Gambia";
    CountryEnum["Georgia"] = "Georgia";
    CountryEnum["Germany"] = "Germany";
    CountryEnum["Ghana"] = "Ghana";
    CountryEnum["Greece"] = "Greece";
    CountryEnum["Grenada"] = "Grenada";
    CountryEnum["Guatemala"] = "Guatemala";
    CountryEnum["Guinea"] = "Guinea";
    CountryEnum["GuineaBissau"] = "Guinea-Bissau";
    CountryEnum["Guyana"] = "Guyana";
    CountryEnum["Haiti"] = "Haiti";
    CountryEnum["Honduras"] = "Honduras";
    CountryEnum["Hungary"] = "Hungary";
    CountryEnum["Iceland"] = "Iceland";
    CountryEnum["India"] = "India";
    CountryEnum["Indonesia"] = "Indonesia";
    CountryEnum["Iran"] = "Iran";
    CountryEnum["Iraq"] = "Iraq";
    CountryEnum["Ireland"] = "Ireland";
    CountryEnum["Jamaica"] = "Jamaica";
    CountryEnum["Japan"] = "Japan";
    CountryEnum["Jordan"] = "Jordan";
    CountryEnum["Kazakhstan"] = "Kazakhstan";
    CountryEnum["Kenya"] = "Kenya";
    CountryEnum["Kiribati"] = "Kiribati";
    CountryEnum["Kosovo"] = "Kosovo";
    CountryEnum["Kuwait"] = "Kuwait";
    CountryEnum["Kyrgyzstan"] = "Kyrgyzstan";
    CountryEnum["Laos"] = "Laos";
    CountryEnum["Latvia"] = "Latvia";
    CountryEnum["Lebanon"] = "Lebanon";
    CountryEnum["Lesotho"] = "Lesotho";
    CountryEnum["Liberia"] = "Liberia";
    CountryEnum["Libya"] = "Libya";
    CountryEnum["Liechtenstein"] = "Liechtenstein";
    CountryEnum["Lithuania"] = "Lithuania";
    CountryEnum["Luxembourg"] = "Luxembourg";
    CountryEnum["Madagascar"] = "Madagascar";
    CountryEnum["Malawi"] = "Malawi";
    CountryEnum["Malaysia"] = "Malaysia";
    CountryEnum["Maldives"] = "Maldives";
    CountryEnum["Mali"] = "Mali";
    CountryEnum["Malta"] = "Malta";
    CountryEnum["MarshallIslands"] = "Marshall Islands";
    CountryEnum["Mauritania"] = "Mauritania";
    CountryEnum["Mauritius"] = "Mauritius";
    CountryEnum["Mexico"] = "Mexico";
    CountryEnum["Micronesia"] = "Micronesia";
    CountryEnum["Moldova"] = "Moldova";
    CountryEnum["Monaco"] = "Monaco";
    CountryEnum["Mongolia"] = "Mongolia";
    CountryEnum["Montenegro"] = "Montenegro";
    CountryEnum["Morocco"] = "Morocco";
    CountryEnum["Mozambique"] = "Mozambique";
    CountryEnum["Myanmar"] = "Myanmar";
    CountryEnum["Namibia"] = "Namibia";
    CountryEnum["Nauru"] = "Nauru";
    CountryEnum["Nepal"] = "Nepal";
    CountryEnum["Netherlands"] = "Netherlands";
    CountryEnum["NewZealand"] = "New Zealand";
    CountryEnum["Nicaragua"] = "Nicaragua";
    CountryEnum["Niger"] = "Niger";
    CountryEnum["Nigeria"] = "Nigeria";
    CountryEnum["NorthKorea"] = "North Korea";
    CountryEnum["NorthMacedonia"] = "North Macedonia";
    CountryEnum["Norway"] = "Norway";
    CountryEnum["Oman"] = "Oman";
    CountryEnum["Pakistan"] = "Pakistan";
    CountryEnum["Palau"] = "Palau";
    CountryEnum["Panama"] = "Panama";
    CountryEnum["PapuaNewGuinea"] = "Papua New Guinea";
    CountryEnum["Paraguay"] = "Paraguay";
    CountryEnum["Peru"] = "Peru";
    CountryEnum["Philippines"] = "Philippines";
    CountryEnum["Poland"] = "Poland";
    CountryEnum["Portugal"] = "Portugal";
    CountryEnum["Qatar"] = "Qatar";
    CountryEnum["Romania"] = "Romania";
    CountryEnum["Russia"] = "Russia";
    CountryEnum["Rwanda"] = "Rwanda";
    CountryEnum["SaintKittsAndNevis"] = "Saint Kitts and Nevis";
    CountryEnum["SaintLucia"] = "Saint Lucia";
    CountryEnum["SaintVincentAndTheGrenadines"] = "Saint Vincent and the Grenadines";
    CountryEnum["Samoa"] = "Samoa";
    CountryEnum["SanMarino"] = "San Marino";
    CountryEnum["SaoTomeAndPrincipe"] = "Sao Tome and Principe";
    CountryEnum["SaudiArabia"] = "Saudi Arabia";
    CountryEnum["Senegal"] = "Senegal";
    CountryEnum["Serbia"] = "Serbia";
    CountryEnum["Seychelles"] = "Seychelles";
    CountryEnum["SierraLeone"] = "Sierra Leone";
    CountryEnum["Singapore"] = "Singapore";
    CountryEnum["Slovakia"] = "Slovakia";
    CountryEnum["Slovenia"] = "Slovenia";
    CountryEnum["SolomonIslands"] = "Solomon Islands";
    CountryEnum["Somalia"] = "Somalia";
    CountryEnum["SouthAfrica"] = "South Africa";
    CountryEnum["SouthKorea"] = "South Korea";
    CountryEnum["SouthSudan"] = "South Sudan";
    CountryEnum["Spain"] = "Spain";
    CountryEnum["SriLanka"] = "Sri Lanka";
    CountryEnum["Sudan"] = "Sudan";
    CountryEnum["Suriname"] = "Suriname";
    CountryEnum["Sweden"] = "Sweden";
    CountryEnum["Switzerland"] = "Switzerland";
    CountryEnum["Syria"] = "Syria";
    CountryEnum["Taiwan"] = "Taiwan";
    CountryEnum["Tajikistan"] = "Tajikistan";
    CountryEnum["Tanzania"] = "Tanzania";
    CountryEnum["Thailand"] = "Thailand";
    CountryEnum["TimorLeste"] = "Timor-Leste";
    CountryEnum["Togo"] = "Togo";
    CountryEnum["Tonga"] = "Tonga";
    CountryEnum["TrinidadAndTobago"] = "Trinidad and Tobago";
    CountryEnum["Tunisia"] = "Tunisia";
    CountryEnum["Turkey"] = "Turkey";
    CountryEnum["Turkmenistan"] = "Turkmenistan";
    CountryEnum["Tuvalu"] = "Tuvalu";
    CountryEnum["Uganda"] = "Uganda";
    CountryEnum["Ukraine"] = "Ukraine";
    CountryEnum["UnitedArabEmirates"] = "United Arab Emirates";
    CountryEnum["UnitedKingdom"] = "United Kingdom";
    CountryEnum["UnitedStates"] = "United States";
    CountryEnum["Uruguay"] = "Uruguay";
    CountryEnum["Uzbekistan"] = "Uzbekistan";
    CountryEnum["Vanuatu"] = "Vanuatu";
    CountryEnum["VaticanCity"] = "Vatican City";
    CountryEnum["Venezuela"] = "Venezuela";
    CountryEnum["Vietnam"] = "Vietnam";
    CountryEnum["Yemen"] = "Yemen";
    CountryEnum["Zambia"] = "Zambia";
    CountryEnum["Zimbabwe"] = "Zimbabwe";
})(CountryEnum || (exports.CountryEnum = CountryEnum = {}));
var CurrencyEnum;
(function (CurrencyEnum) {
    CurrencyEnum["AED"] = "AED";
    CurrencyEnum["AFN"] = "AFN";
    CurrencyEnum["ALL"] = "ALL";
    CurrencyEnum["AMD"] = "AMD";
    CurrencyEnum["ANG"] = "ANG";
    CurrencyEnum["AOA"] = "AOA";
    CurrencyEnum["ARS"] = "ARS";
    CurrencyEnum["AUD"] = "AUD";
    CurrencyEnum["AWG"] = "AWG";
    CurrencyEnum["AZN"] = "AZN";
    CurrencyEnum["BAM"] = "BAM";
    CurrencyEnum["BBD"] = "BBD";
    CurrencyEnum["BDT"] = "BDT";
    CurrencyEnum["BGN"] = "BGN";
    CurrencyEnum["BHD"] = "BHD";
    CurrencyEnum["BIF"] = "BIF";
    CurrencyEnum["BMD"] = "BMD";
    CurrencyEnum["BND"] = "BND";
    CurrencyEnum["BOB"] = "BOB";
    CurrencyEnum["BRL"] = "BRL";
    CurrencyEnum["BSD"] = "BSD";
    CurrencyEnum["BTN"] = "BTN";
    CurrencyEnum["BWP"] = "BWP";
    CurrencyEnum["BYN"] = "BYN";
    CurrencyEnum["BZD"] = "BZD";
    CurrencyEnum["CAD"] = "CAD";
    CurrencyEnum["CDF"] = "CDF";
    CurrencyEnum["CHF"] = "CHF";
    CurrencyEnum["CLP"] = "CLP";
    CurrencyEnum["CNY"] = "CNY";
    CurrencyEnum["COP"] = "COP";
    CurrencyEnum["CRC"] = "CRC";
    CurrencyEnum["CUP"] = "CUP";
    CurrencyEnum["CVE"] = "CVE";
    CurrencyEnum["CZK"] = "CZK";
    CurrencyEnum["DJF"] = "DJF";
    CurrencyEnum["DKK"] = "DKK";
    CurrencyEnum["DOP"] = "DOP";
    CurrencyEnum["DZD"] = "DZD";
    CurrencyEnum["EGP"] = "EGP";
    CurrencyEnum["ERN"] = "ERN";
    CurrencyEnum["ETB"] = "ETB";
    CurrencyEnum["EUR"] = "EUR";
    CurrencyEnum["FJD"] = "FJD";
    CurrencyEnum["FKP"] = "FKP";
    CurrencyEnum["FOK"] = "FOK";
    CurrencyEnum["GBP"] = "GBP";
    CurrencyEnum["GEL"] = "GEL";
    CurrencyEnum["GGP"] = "GGP";
    CurrencyEnum["GHS"] = "GHS";
    CurrencyEnum["GIP"] = "GIP";
    CurrencyEnum["GMD"] = "GMD";
    CurrencyEnum["GNF"] = "GNF";
    CurrencyEnum["GTQ"] = "GTQ";
    CurrencyEnum["GYD"] = "GYD";
    CurrencyEnum["HKD"] = "HKD";
    CurrencyEnum["HNL"] = "HNL";
    CurrencyEnum["HRK"] = "HRK";
    CurrencyEnum["HTG"] = "HTG";
    CurrencyEnum["HUF"] = "HUF";
    CurrencyEnum["IDR"] = "IDR";
    CurrencyEnum["ILS"] = "ILS";
    CurrencyEnum["IMP"] = "IMP";
    CurrencyEnum["INR"] = "INR";
    CurrencyEnum["IQD"] = "IQD";
    CurrencyEnum["IRR"] = "IRR";
    CurrencyEnum["ISK"] = "ISK";
    CurrencyEnum["JEP"] = "JEP";
    CurrencyEnum["JMD"] = "JMD";
    CurrencyEnum["JOD"] = "JOD";
    CurrencyEnum["JPY"] = "JPY";
    CurrencyEnum["KES"] = "KES";
    CurrencyEnum["KGS"] = "KGS";
    CurrencyEnum["KHR"] = "KHR";
    CurrencyEnum["KID"] = "KID";
    CurrencyEnum["KMF"] = "KMF";
    CurrencyEnum["KRW"] = "KRW";
    CurrencyEnum["KWD"] = "KWD";
    CurrencyEnum["KYD"] = "KYD";
    CurrencyEnum["KZT"] = "KZT";
    CurrencyEnum["LAK"] = "LAK";
    CurrencyEnum["LBP"] = "LBP";
    CurrencyEnum["LKR"] = "LKR";
    CurrencyEnum["LRD"] = "LRD";
    CurrencyEnum["LSL"] = "LSL";
    CurrencyEnum["LYD"] = "LYD";
    CurrencyEnum["MAD"] = "MAD";
    CurrencyEnum["MDL"] = "MDL";
    CurrencyEnum["MGA"] = "MGA";
    CurrencyEnum["MKD"] = "MKD";
    CurrencyEnum["MMK"] = "MMK";
    CurrencyEnum["MNT"] = "MNT";
    CurrencyEnum["MOP"] = "MOP";
    CurrencyEnum["MRU"] = "MRU";
    CurrencyEnum["MUR"] = "MUR";
    CurrencyEnum["MVR"] = "MVR";
    CurrencyEnum["MWK"] = "MWK";
    CurrencyEnum["MXN"] = "MXN";
    CurrencyEnum["MYR"] = "MYR";
    CurrencyEnum["MZN"] = "MZN";
    CurrencyEnum["NAD"] = "NAD";
    CurrencyEnum["NGN"] = "NGN";
    CurrencyEnum["NIO"] = "NIO";
    CurrencyEnum["NOK"] = "NOK";
    CurrencyEnum["NPR"] = "NPR";
    CurrencyEnum["NZD"] = "NZD";
    CurrencyEnum["OMR"] = "OMR";
    CurrencyEnum["PAB"] = "PAB";
    CurrencyEnum["PEN"] = "PEN";
    CurrencyEnum["PGK"] = "PGK";
    CurrencyEnum["PHP"] = "PHP";
    CurrencyEnum["PKR"] = "PKR";
    CurrencyEnum["PLN"] = "PLN";
    CurrencyEnum["PYG"] = "PYG";
    CurrencyEnum["QAR"] = "QAR";
    CurrencyEnum["RON"] = "RON";
    CurrencyEnum["RSD"] = "RSD";
    CurrencyEnum["RUB"] = "RUB";
    CurrencyEnum["RWF"] = "RWF";
    CurrencyEnum["SAR"] = "SAR";
    CurrencyEnum["SBD"] = "SBD";
    CurrencyEnum["SCR"] = "SCR";
    CurrencyEnum["SDG"] = "SDG";
    CurrencyEnum["SEK"] = "SEK";
    CurrencyEnum["SGD"] = "SGD";
    CurrencyEnum["SHP"] = "SHP";
    CurrencyEnum["SLL"] = "SLL";
    CurrencyEnum["SOS"] = "SOS";
    CurrencyEnum["SRD"] = "SRD";
    CurrencyEnum["SSP"] = "SSP";
    CurrencyEnum["STN"] = "STN";
    CurrencyEnum["SYP"] = "SYP";
    CurrencyEnum["SZL"] = "SZL";
    CurrencyEnum["THB"] = "THB";
    CurrencyEnum["TJS"] = "TJS";
    CurrencyEnum["TMT"] = "TMT";
    CurrencyEnum["TND"] = "TND";
    CurrencyEnum["TOP"] = "TOP";
    CurrencyEnum["TRY"] = "TRY";
    CurrencyEnum["TTD"] = "TTD";
    CurrencyEnum["TVD"] = "TVD";
    CurrencyEnum["TWD"] = "TWD";
    CurrencyEnum["TZS"] = "TZS";
    CurrencyEnum["UAH"] = "UAH";
    CurrencyEnum["UGX"] = "UGX";
    CurrencyEnum["USD"] = "USD";
    CurrencyEnum["UYU"] = "UYU";
    CurrencyEnum["UZS"] = "UZS";
    CurrencyEnum["VES"] = "VES";
    CurrencyEnum["VND"] = "VND";
    CurrencyEnum["VUV"] = "VUV";
    CurrencyEnum["WST"] = "WST";
    CurrencyEnum["XAF"] = "XAF";
    CurrencyEnum["XCD"] = "XCD";
    CurrencyEnum["XDR"] = "XDR";
    CurrencyEnum["XOF"] = "XOF";
    CurrencyEnum["XPF"] = "XPF";
    CurrencyEnum["YER"] = "YER";
    CurrencyEnum["ZAR"] = "ZAR";
    CurrencyEnum["ZMW"] = "ZMW";
    CurrencyEnum["ZWL"] = "ZWL";
})(CurrencyEnum || (exports.CurrencyEnum = CurrencyEnum = {}));
