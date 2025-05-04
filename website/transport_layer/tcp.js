function showTCPField() {
    const dropdown = document.getElementById("tcp_drop");
    const infoDiv = document.getElementById("tcp-p-info");

    let content = {
        "": '',
        srcport: 'The Source Port Number field is composed of 16 bits. This field is used to identify the sending application.',
        dstport: "The Destination Port Number field is composed of 16 bits. This field is used to identify the destination application.",
        sqnum: "The Sequence Number field is composed of 32 bits. This field is used to support data transfer plus flow and error control.",
        acknum: "The Acknowledgement Number field is composed of 32 bits. This field is used to support data transfer plus flow and error control.",
        hdr_len: "The Header Length field is composed of 4 bits. This field represents the length of the TCP header in 4-byte words.",
        reserved: "The Reserved field is composed of 6 bits. This field is usually set to zero.",
        flags: "The Flags field is composed of 6 bits. This field is used to indicate the type of packet (e.g., SYN, ACK, FIN).",
        window: "The Window Size field is composed of 16 bits. This field determines how much data can be sent before receiving an acknowledgment.",
        checksum: "The Checksum field is composed of 16 bits. It provides error-checking for the header and data.",
        urgent: "The Urgent Pointer field is composed of 16 bits. It indicates where the urgent data ends.",
        options: "The Options field can be up to 40 bytes and includes optional settings like Maximum Segment Size (MSS)."
    };

    const selectedField = dropdown.value;
    infoDiv.innerHTML = content[selectedField] || "Please select a packet field to view details.";
}
