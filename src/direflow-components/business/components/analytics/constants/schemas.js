const advanceFilterModel = [
    {
        key: "advanceSearch",
        type: "Card",
        title: "",
        className: "",
        titleClassName: "commonHead commonHeadPadding",
        childsClassName: "",
        controls: [
            {
                key: "State",
                type: "search-dropdown",
                value: "",
                label: "Select State",
                props: { required: true, class: "inputText", placeholder: "State" },
                labelClass: "inputLabel ddlUnderwriterList",
                positionClass: "col-xxl-3 col-lg-4 col-md-2",
                isColummnDisplay: false,
                dataPath: "State",
                options:  []  
            },
            {
                key: "Lob",
                type: "search-dropdown",
                label: "Select LOB",
                props: { required: true, class: "inputText" },
                labelClass: "inputLabel ddlUnderwriterList",
                positionClass: "col-xxl-3 col-lg-4 col-md-2",
                isColummnDisplay: false,
                dataPath: "Lob",
                options: []
              },
           
        ]
    }
];

export {
    advanceFilterModel,
}