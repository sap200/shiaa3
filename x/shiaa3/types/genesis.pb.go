// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: shiaa3/genesis.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

// GenesisState defines the capability module's genesis state.
type GenesisState struct {
	// this line is used by starport scaffolding # genesis/proto/state
	WinnersList               []*Winners               `protobuf:"bytes,8,rep,name=WinnersList,proto3" json:"WinnersList,omitempty"`
	MembersList               []*Members               `protobuf:"bytes,7,rep,name=MembersList,proto3" json:"MembersList,omitempty"`
	Pool4TicketList           []*Pool4Ticket           `protobuf:"bytes,6,rep,name=Pool4TicketList,proto3" json:"Pool4TicketList,omitempty"`
	Pool3TicketList           []*Pool3Ticket           `protobuf:"bytes,5,rep,name=Pool3TicketList,proto3" json:"Pool3TicketList,omitempty"`
	Pool2TicketList           []*Pool2Ticket           `protobuf:"bytes,4,rep,name=Pool2TicketList,proto3" json:"Pool2TicketList,omitempty"`
	Pool1TicketList           []*Pool1Ticket           `protobuf:"bytes,3,rep,name=Pool1TicketList,proto3" json:"Pool1TicketList,omitempty"`
	Pool0TicketList           []*Pool0Ticket           `protobuf:"bytes,2,rep,name=Pool0TicketList,proto3" json:"Pool0TicketList,omitempty"`
	JoinPoolAndStakeAssetList []*JoinPoolAndStakeAsset `protobuf:"bytes,1,rep,name=JoinPoolAndStakeAssetList,proto3" json:"JoinPoolAndStakeAssetList,omitempty"`
}

func (m *GenesisState) Reset()         { *m = GenesisState{} }
func (m *GenesisState) String() string { return proto.CompactTextString(m) }
func (*GenesisState) ProtoMessage()    {}
func (*GenesisState) Descriptor() ([]byte, []int) {
	return fileDescriptor_685d666ccb02059d, []int{0}
}
func (m *GenesisState) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *GenesisState) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_GenesisState.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *GenesisState) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GenesisState.Merge(m, src)
}
func (m *GenesisState) XXX_Size() int {
	return m.Size()
}
func (m *GenesisState) XXX_DiscardUnknown() {
	xxx_messageInfo_GenesisState.DiscardUnknown(m)
}

var xxx_messageInfo_GenesisState proto.InternalMessageInfo

func (m *GenesisState) GetWinnersList() []*Winners {
	if m != nil {
		return m.WinnersList
	}
	return nil
}

func (m *GenesisState) GetMembersList() []*Members {
	if m != nil {
		return m.MembersList
	}
	return nil
}

func (m *GenesisState) GetPool4TicketList() []*Pool4Ticket {
	if m != nil {
		return m.Pool4TicketList
	}
	return nil
}

func (m *GenesisState) GetPool3TicketList() []*Pool3Ticket {
	if m != nil {
		return m.Pool3TicketList
	}
	return nil
}

func (m *GenesisState) GetPool2TicketList() []*Pool2Ticket {
	if m != nil {
		return m.Pool2TicketList
	}
	return nil
}

func (m *GenesisState) GetPool1TicketList() []*Pool1Ticket {
	if m != nil {
		return m.Pool1TicketList
	}
	return nil
}

func (m *GenesisState) GetPool0TicketList() []*Pool0Ticket {
	if m != nil {
		return m.Pool0TicketList
	}
	return nil
}

func (m *GenesisState) GetJoinPoolAndStakeAssetList() []*JoinPoolAndStakeAsset {
	if m != nil {
		return m.JoinPoolAndStakeAssetList
	}
	return nil
}

func init() {
	proto.RegisterType((*GenesisState)(nil), "sap200.shiaa3.shiaa3.GenesisState")
}

func init() { proto.RegisterFile("shiaa3/genesis.proto", fileDescriptor_685d666ccb02059d) }

var fileDescriptor_685d666ccb02059d = []byte{
	// 335 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x84, 0xd2, 0x4f, 0x4b, 0xc3, 0x30,
	0x18, 0x06, 0xf0, 0xd5, 0xcd, 0x29, 0x9d, 0x20, 0x94, 0x1d, 0xa6, 0x60, 0xd0, 0x5d, 0x14, 0x84,
	0xae, 0x4d, 0xbc, 0xcb, 0xbc, 0x08, 0xfe, 0x01, 0xe9, 0x04, 0xc1, 0x5b, 0x3b, 0xc3, 0x16, 0xe6,
	0x9a, 0xb2, 0x44, 0xd0, 0x6f, 0xe1, 0xc7, 0xf2, 0xb8, 0xa3, 0x47, 0x69, 0xbf, 0x86, 0x07, 0x59,
	0x9a, 0xea, 0xab, 0x4d, 0xed, 0x69, 0x23, 0xcf, 0xf3, 0xfe, 0x4a, 0xc2, 0x6b, 0x77, 0xc5, 0x94,
	0x85, 0x21, 0x19, 0x4c, 0x68, 0x4c, 0x05, 0x13, 0x6e, 0xb2, 0xe0, 0x92, 0x3b, 0x5d, 0x11, 0x26,
	0xd8, 0xf3, 0xdc, 0x3c, 0xd4, 0x3f, 0xbb, 0x45, 0xf7, 0x8e, 0xc5, 0x31, 0x5d, 0xe8, 0xee, 0xf7,
	0xe9, 0x35, 0x9d, 0x47, 0x3f, 0xa7, 0x3d, 0x7d, 0x7a, 0xc3, 0xf9, 0xe3, 0xc9, 0x2d, 0x1b, 0xcf,
	0xa8, 0x34, 0x24, 0xa4, 0x32, 0xc1, 0x95, 0x89, 0x5f, 0x99, 0x78, 0xbf, 0x92, 0xbe, 0x4e, 0x2e,
	0x38, 0x8b, 0x57, 0xe9, 0x30, 0x7e, 0x18, 0xc9, 0x70, 0x46, 0x87, 0x42, 0x14, 0x9d, 0xfe, 0x67,
	0xcb, 0xde, 0x3a, 0xcf, 0x6f, 0x3e, 0x92, 0xa1, 0xa4, 0xce, 0xa9, 0xdd, 0xd1, 0xb7, 0xbb, 0x62,
	0x42, 0xf6, 0x36, 0xf7, 0x9b, 0x47, 0x1d, 0xbc, 0xe7, 0x9a, 0x9e, 0xc3, 0xd5, 0xc5, 0x00, 0x4e,
	0xac, 0x00, 0xfd, 0x10, 0x0a, 0xd8, 0xf8, 0x0f, 0xd0, 0xc5, 0x00, 0x4e, 0x38, 0x97, 0xf6, 0x36,
	0x78, 0x33, 0x85, 0xb4, 0x15, 0x72, 0x60, 0x46, 0x40, 0x39, 0xf8, 0x3b, 0x59, 0x60, 0x04, 0x60,
	0xeb, 0x75, 0x18, 0x81, 0x18, 0x29, 0x63, 0x18, 0x60, 0xad, 0x3a, 0x0c, 0x43, 0x0c, 0x97, 0x31,
	0x1f, 0x60, 0xcd, 0x3a, 0xcc, 0x87, 0x98, 0x5f, 0xc6, 0x3c, 0x80, 0xad, 0xd5, 0x61, 0x1e, 0xc4,
	0xc0, 0xa4, 0xc3, 0xec, 0x1d, 0xe3, 0xca, 0x28, 0xd6, 0x52, 0xec, 0xb1, 0x99, 0x35, 0x8e, 0x05,
	0xd5, 0xda, 0xd9, 0xf0, 0x2d, 0x45, 0xd6, 0x32, 0x45, 0xd6, 0x47, 0x8a, 0xac, 0xd7, 0x0c, 0x35,
	0x96, 0x19, 0x6a, 0xbc, 0x67, 0xa8, 0x71, 0x7f, 0x38, 0x61, 0x72, 0xfa, 0x14, 0xb9, 0x63, 0x3e,
	0x1f, 0xe4, 0xdf, 0x1a, 0xe8, 0x75, 0x7e, 0x2e, 0xfe, 0xc8, 0x97, 0x84, 0x8a, 0xa8, 0xad, 0x16,
	0x99, 0x7c, 0x05, 0x00, 0x00, 0xff, 0xff, 0x7a, 0xde, 0x42, 0x18, 0xc8, 0x03, 0x00, 0x00,
}

func (m *GenesisState) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *GenesisState) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *GenesisState) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.WinnersList) > 0 {
		for iNdEx := len(m.WinnersList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.WinnersList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x42
		}
	}
	if len(m.MembersList) > 0 {
		for iNdEx := len(m.MembersList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.MembersList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.Pool4TicketList) > 0 {
		for iNdEx := len(m.Pool4TicketList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pool4TicketList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x32
		}
	}
	if len(m.Pool3TicketList) > 0 {
		for iNdEx := len(m.Pool3TicketList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pool3TicketList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x2a
		}
	}
	if len(m.Pool2TicketList) > 0 {
		for iNdEx := len(m.Pool2TicketList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pool2TicketList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x22
		}
	}
	if len(m.Pool1TicketList) > 0 {
		for iNdEx := len(m.Pool1TicketList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pool1TicketList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x1a
		}
	}
	if len(m.Pool0TicketList) > 0 {
		for iNdEx := len(m.Pool0TicketList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.Pool0TicketList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0x12
		}
	}
	if len(m.JoinPoolAndStakeAssetList) > 0 {
		for iNdEx := len(m.JoinPoolAndStakeAssetList) - 1; iNdEx >= 0; iNdEx-- {
			{
				size, err := m.JoinPoolAndStakeAssetList[iNdEx].MarshalToSizedBuffer(dAtA[:i])
				if err != nil {
					return 0, err
				}
				i -= size
				i = encodeVarintGenesis(dAtA, i, uint64(size))
			}
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintGenesis(dAtA []byte, offset int, v uint64) int {
	offset -= sovGenesis(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *GenesisState) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.JoinPoolAndStakeAssetList) > 0 {
		for _, e := range m.JoinPoolAndStakeAssetList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Pool0TicketList) > 0 {
		for _, e := range m.Pool0TicketList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Pool1TicketList) > 0 {
		for _, e := range m.Pool1TicketList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Pool2TicketList) > 0 {
		for _, e := range m.Pool2TicketList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Pool3TicketList) > 0 {
		for _, e := range m.Pool3TicketList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.Pool4TicketList) > 0 {
		for _, e := range m.Pool4TicketList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.MembersList) > 0 {
		for _, e := range m.MembersList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	if len(m.WinnersList) > 0 {
		for _, e := range m.WinnersList {
			l = e.Size()
			n += 1 + l + sovGenesis(uint64(l))
		}
	}
	return n
}

func sovGenesis(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozGenesis(x uint64) (n int) {
	return sovGenesis(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *GenesisState) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: GenesisState: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: GenesisState: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field JoinPoolAndStakeAssetList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.JoinPoolAndStakeAssetList = append(m.JoinPoolAndStakeAssetList, &JoinPoolAndStakeAsset{})
			if err := m.JoinPoolAndStakeAssetList[len(m.JoinPoolAndStakeAssetList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pool0TicketList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pool0TicketList = append(m.Pool0TicketList, &Pool0Ticket{})
			if err := m.Pool0TicketList[len(m.Pool0TicketList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pool1TicketList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pool1TicketList = append(m.Pool1TicketList, &Pool1Ticket{})
			if err := m.Pool1TicketList[len(m.Pool1TicketList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pool2TicketList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pool2TicketList = append(m.Pool2TicketList, &Pool2Ticket{})
			if err := m.Pool2TicketList[len(m.Pool2TicketList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pool3TicketList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pool3TicketList = append(m.Pool3TicketList, &Pool3Ticket{})
			if err := m.Pool3TicketList[len(m.Pool3TicketList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Pool4TicketList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Pool4TicketList = append(m.Pool4TicketList, &Pool4Ticket{})
			if err := m.Pool4TicketList[len(m.Pool4TicketList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MembersList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MembersList = append(m.MembersList, &Members{})
			if err := m.MembersList[len(m.MembersList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WinnersList", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthGenesis
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthGenesis
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WinnersList = append(m.WinnersList, &Winners{})
			if err := m.WinnersList[len(m.WinnersList)-1].Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipGenesis(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthGenesis
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipGenesis(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowGenesis
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowGenesis
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthGenesis
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupGenesis
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthGenesis
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthGenesis        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowGenesis          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupGenesis = fmt.Errorf("proto: unexpected end of group")
)
