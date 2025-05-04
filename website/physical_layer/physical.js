function displayInfo(getType) {
    //function allows intractability between user and information
    let content = {
        hardware: "The hardware controller manages interfaces of the physical medium, conversion of data bytes " +
            "to bits of data to signals sent across the given medium on the transmit side. The hardware controller" +
            "is also responsible for controlling access to the medium whenever one or more devices are wanting to talk " +
            "at once as well as interfacing with the computer system to ensure that software can migrate data into " +
            "the hardware controller",
        software: "The software controller manages the buffers that store packets that have been received and those " +
            "that are waiting to be sent. The software controller also provides the device driver that interfaces with" +
            "the computer's hardware. What is the device driver? The device driver provides a standard interface " +
            "between the hardware and operating system. The driver is normally provided by a given vendor.",
        clear: ""
    };
    document.querySelector('.controller_information').innerHTML = content[getType];
}

function displayEthernet(getSection){
    let content = {
        preamble: "Preamble is a sequence of 7 bytes used by the receiver to synchronize its to ethernet frame. " +
            "This field is inserted by the hardware controller when frame is transmitted. When the packet is received " +
            "and extracted, this field is removed.",
        sfd: 'The start frame delimiter is 1 byte long and is used to indicate to the hardware controller when the ' +
            'preamble cuts off and where the destination address begins within the packet. When the packet is received ' +
            'and extracted, this field is removed.',
        destination_address:'The destination address is composed of 6 bytes and is used to identify the networked device ' +
            'that the packet is being sent to. This field is used by the receiving hardware controller to determine ' +
            "if the frame should be read. If the address doesn't match the rest of the packet is ignored and " +
            "the packet is thrown away. The Destination Address is also used to authenticate " +
            "the physical network controller connected to the network that should receive the frame",
        source_address: 'The source address is the hardware address of the sending device. This frame is 6 bytes long ' +
            'and is supplied to the hardware controller.',
        type_length: 'This field is 1 byte and is used to identify the lower-layer protocol that should process the ' +
            'given packet. This type length field has two meanings depending upon its value. If the value is 0x600 ' +
            'or greater then it is a type field and the value indicates the protocol contained in teh data part of the frame. ' +
            'If the value is less than 0x600 then the value is the length of the data field.',
        data: 'The data field is obvious; it contains the data of the packet being sent. This field is limited a minimum of ' +
            '46 bytes to a maximum of 1500 bytes. These restrictions are put into place to ensure equal access to the media ' +
            'of the hardware controller as well as ensuring that the collision detection functions properly',
        fcs: 'The frame check sequence is used to aid in the verification that a packet has not been corrupted.'
    };
    document.querySelector('.packet_information').innerHTML = content[getSection];
}

function displayWireless(getSection){
    let content = {
        fc: '<p>Frame control is a 2 byte value that aids in identifying the packets frame type and other information specific ' +
            'to the frame</p>',
        duration: '<p>duration is a 2 byte value used to manage the frames access control protocol</p>',
        add1: '<p>Address one is a 6 byte value used to identify the destination of the transmitted packet. This is used by the hardware controller ' +
            'to determine if the frame should be read.</p>',
        add2: '<p>Address two is a 6 byte address of the transmitting device</p>',
        add3: '<p>Address three is a 6 byte value used when access point is part of an extended network where the access point relays traffic</p>',
        add4: '<p>Address four is a 6 byte value used when the access point is part of an extended network where the access point will relay traffic</p>',
        sc: '<p>The sequence control is a 2 byte value used by the acknowledgement process</p>',
        data: '<p>The data field contains the data of the frame, obviously. Unlike wired ethernet, wireless ethernet does not ' +
            'have a minimum data length, apart from the data field length. The data field length is limited to ' +
            '2312 bytes.</p>',
        fcs: "<p>the frame check sequence (FCS for short) field is used to aid in the verification that a frame has not been corrupted during " +
            "transmission. In order to verify if a frame is valid, the FCS uses what's called a cyclic redundancy check code.</p>"
    };
    document.querySelector('.wireless_information').innerHTML = content[getSection];
}