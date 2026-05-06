// Edit this file to add/update projects
const projects = [
    {
        title: "HF/VHF 30MHz Class E Inverter",
        date: "February 2026",
        tags: ["power", "research"],
        image: "./images/classE_schematic.jpg",
        description: "Designed a Class-E inverter outputting 30MHz AC power with high efficiency via optimization of resonant tank parameters and GaN device selection",
        link: "projects/classE-inverter.html"
    },
    
    {
        title: "Leslie Speaker 'Pedal'",
        date: "December 2025",
        tags: ["power", "course"],
        image: "./images/leslie_box.jpg", // Path to your image
        description: "Designed a mechanical 'guitar pedal' based on a Leslie speaker with continuous speed control, featuring a Class D amplifier, boost converter, and SEPIC converter",
        link: "projects/leslie-speaker.html"
    },
    {
        title: "Resonant Converter for Fluorescent Lamp Drive",
        date: "October 2025",
        tags: ["power", "course"],
        image: "./images/lamp_wave1.jpg", // Path to your image
        description: "Designed and built an LC resonant converter to drive a fluorescent lamp, achieving 400V strike voltage from a 30V input",
        link: "projects/resonant-converter.html"
    },

];

// Available filter categories - add more as needed
const filterCategories = [
    { id: "all", label: "all" },
    { id: "course", label: "course" },
    { id: "power", label: "power-electronics" },
    { id: "personal", label: "personal" },
    { id: "software", label: "software" },
];
