package types

// ValidateBasic is used for validating the packet
func (p IbcAssetPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcAssetPacketData) GetBytes() ([]byte, error) {
	var modulePacket AssetsPacketData

	modulePacket.Packet = &AssetsPacketData_IbcAssetPacket{&p}

	return modulePacket.Marshal()
}
