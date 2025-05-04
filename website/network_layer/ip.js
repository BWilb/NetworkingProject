function showField() {
    const dropdown = document.getElementById("fields");
    const infoDiv = document.getElementById("field-info");

    // Packet field descriptions
    let content = {
        "": '',
        version: 'The version field indicates whether the packet operates on Version 4 or 6 of the Internet Protocol, that’s it. ' +
            'It’s also 4 bits long.',
        HLen: "The Header Length field is the length of the IP header. The default value is 5.",
        ServiceType: "The service type field was designed to pick a network based on that network's level of service. " +
            "Essentially, this field is useless and is normally set to zero.",
        Length: "The length field indicates the length of the packet's payload in bytes.",
        ID: "The ID field is used to uniquely identify each packet that originates from a specific device. " +
            "If a packet were to be fragmented then the fragments would receive the same ID as the whole. " +
            "You can almost think of this field as like a QR code.",
        flag: "",
        offset: "The offset field indicates where a specific fragment should be placed in the reassembly buffer",
        TTL: "The time to live field prevents packets from living forever. TTL executes packets if they have been bouncing " +
            "around teh internet for a given period of time.",
        Protocol: "The protocol field indicates the specific upper-layer protocol that will handle the packet. 1 indicates ICMP, " +
            "6 indicates TCP, and 17 indicates UDP.",
        Checksum: "",
        SRC_IP: "Field contains the IP address of the device that the packet originated from.",
        DST_IP: "Field contains the IP address of the destined device",
        Options: "The option field is hardly ever used.",
        Data: "Data is Data and has maximum length of 65,536 minus the header length."

    };

    const selectedField = dropdown.value;

    // Update the infoDiv with the corresponding description
    infoDiv.innerHTML = content[selectedField] || "Please select a packet field to view details.";
}

// Attach the event listener when the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fields").addEventListener("change", showField);
});

function showArpField() {
    const dropdown = document.getElementById("arp-drop-down");
    const infoDiv = document.getElementById("arp-info");

    // Packet field descriptions
    let content = {
        "": '',
        hw_type: 'The Hardware type field is composed of 16 bits. Identifies the type of physical network that the ARP protocol ' +
            'is used on.',
        protocol_type: "The protocol type field is composed of 16 bits. This field represents the protocol that is using " +
            "the ARP protocol.",
        hlen: "The header length field is composed of 8 bits. This field represents the length of the hardware address in " +
            "the ARP header.",
        plen: "The protocol length field is composed of 4 bits. Represents the length of the upper layer protocol addresses.",
        operation: "The operation field is composed of 16 bits. This field represents whether the ARP packet is a request or reply.",
        sender_hw_address: "The size of the sender hardware address field is ever changing...but ethernet uses 6 bytes though.",
        sender_ip: "The Sender protocol address is composed of 4 bytes. This field represents the type of " +
            "IP address used by the sender.",
        target_hw_address: "The target hardware address field is variable in size. This field represents the hardware address " +
            "of the target device.",
        target_ip_address: "The target hardware address field is variable in size. This field represents the ip address " +
            "of the target device."
    };

    const selectedField = dropdown.value;

    // Update the infoDiv with the corresponding description
    infoDiv.innerHTML = content[selectedField] || "Please select a packet field to view details.";
}

// Attach the event listener when the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("arp-drop-down").addEventListener("change", showField);
});


function showICMPField() {
    const dropdown = document.getElementById("icmp-drop");
    const infoDiv = document.getElementById("icmp-info");

    // Packet field descriptions
    let content = {
        "": '',
        type: 'The type field is composed of 8 bits. This field is used to distinguish between several types of ICMP packets. ' +
            'Any of these code types may serve more than one function, it all depends upon what the code field displays',
        code: "The code field is composed 8 bits. The very existence of this field is just to determine the type of the ICMP " +
            "message that is being used.",
        checksum: "The checksum field is primarily used for error checking",
        parameter: "Split with the information field. Space that is allocated to each field is determined by the specific message" +
            "type."
    };

    const selectedField = dropdown.value;

    // Update the infoDiv with the corresponding description
    infoDiv.innerHTML = content[selectedField] || "Please select a packet field to view details.";
}

// Attach the event listener when the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("icmp-drop").addEventListener("change", showField);
});
