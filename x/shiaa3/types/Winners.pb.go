// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: shiaa3/Winners.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
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

type Winners struct {
	Creator       string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id            uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	AddressString string `protobuf:"bytes,3,opt,name=AddressString,proto3" json:"AddressString,omitempty"`
	PoolNo        string `protobuf:"bytes,4,opt,name=PoolNo,proto3" json:"PoolNo,omitempty"`
	Winnings      string `protobuf:"bytes,5,opt,name=Winnings,proto3" json:"Winnings,omitempty"`
}

func (m *Winners) Reset()         { *m = Winners{} }
func (m *Winners) String() string { return proto.CompactTextString(m) }
func (*Winners) ProtoMessage()    {}
func (*Winners) Descriptor() ([]byte, []int) {
	return fileDescriptor_ea64b02a006b0510, []int{0}
}
func (m *Winners) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Winners) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Winners.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Winners) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Winners.Merge(m, src)
}
func (m *Winners) XXX_Size() int {
	return m.Size()
}
func (m *Winners) XXX_DiscardUnknown() {
	xxx_messageInfo_Winners.DiscardUnknown(m)
}

var xxx_messageInfo_Winners proto.InternalMessageInfo

func (m *Winners) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Winners) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Winners) GetAddressString() string {
	if m != nil {
		return m.AddressString
	}
	return ""
}

func (m *Winners) GetPoolNo() string {
	if m != nil {
		return m.PoolNo
	}
	return ""
}

func (m *Winners) GetWinnings() string {
	if m != nil {
		return m.Winnings
	}
	return ""
}

func init() {
	proto.RegisterType((*Winners)(nil), "sap200.shiaa3.shiaa3.Winners")
}

func init() { proto.RegisterFile("shiaa3/Winners.proto", fileDescriptor_ea64b02a006b0510) }

var fileDescriptor_ea64b02a006b0510 = []byte{
	// 227 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x29, 0xce, 0xc8, 0x4c,
	0x4c, 0x34, 0xd6, 0x0f, 0xcf, 0xcc, 0xcb, 0x4b, 0x2d, 0x2a, 0xd6, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x29, 0x4e, 0x2c, 0x30, 0x32, 0x30, 0xd0, 0x83, 0x48, 0x42, 0x29, 0x29, 0x91, 0xf4,
	0xfc, 0xf4, 0x7c, 0xb0, 0x02, 0x7d, 0x10, 0x0b, 0xa2, 0x56, 0xa9, 0x97, 0x91, 0x8b, 0x1d, 0xaa,
	0x5b, 0x48, 0x82, 0x8b, 0x3d, 0xb9, 0x28, 0x35, 0xb1, 0x24, 0xbf, 0x48, 0x82, 0x51, 0x81, 0x51,
	0x83, 0x33, 0x08, 0xc6, 0x15, 0xe2, 0xe3, 0x62, 0xca, 0x4c, 0x91, 0x60, 0x52, 0x60, 0xd4, 0x60,
	0x09, 0x62, 0xca, 0x4c, 0x11, 0x52, 0xe1, 0xe2, 0x75, 0x4c, 0x49, 0x29, 0x4a, 0x2d, 0x2e, 0x0e,
	0x2e, 0x29, 0xca, 0xcc, 0x4b, 0x97, 0x60, 0x06, 0xab, 0x47, 0x15, 0x14, 0x12, 0xe3, 0x62, 0x0b,
	0xc8, 0xcf, 0xcf, 0xf1, 0xcb, 0x97, 0x60, 0x01, 0x4b, 0x43, 0x79, 0x42, 0x52, 0x5c, 0x1c, 0x20,
	0x2b, 0x33, 0xf3, 0xd2, 0x8b, 0x25, 0x58, 0xc1, 0x32, 0x70, 0xbe, 0x93, 0xe3, 0x89, 0x47, 0x72,
	0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1, 0x1c, 0xc3, 0x85, 0xc7,
	0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0xa9, 0xa7, 0x67, 0x96, 0x64, 0x94, 0x26, 0xe9, 0x25,
	0xe7, 0xe7, 0xea, 0x43, 0x3c, 0xa8, 0x0f, 0xf5, 0x7d, 0x05, 0x8c, 0x51, 0x52, 0x59, 0x90, 0x5a,
	0x9c, 0xc4, 0x06, 0xf6, 0x99, 0x31, 0x20, 0x00, 0x00, 0xff, 0xff, 0x84, 0xbf, 0xcc, 0x74, 0x1d,
	0x01, 0x00, 0x00,
}

func (m *Winners) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Winners) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Winners) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Winnings) > 0 {
		i -= len(m.Winnings)
		copy(dAtA[i:], m.Winnings)
		i = encodeVarintWinners(dAtA, i, uint64(len(m.Winnings)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.PoolNo) > 0 {
		i -= len(m.PoolNo)
		copy(dAtA[i:], m.PoolNo)
		i = encodeVarintWinners(dAtA, i, uint64(len(m.PoolNo)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AddressString) > 0 {
		i -= len(m.AddressString)
		copy(dAtA[i:], m.AddressString)
		i = encodeVarintWinners(dAtA, i, uint64(len(m.AddressString)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintWinners(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintWinners(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintWinners(dAtA []byte, offset int, v uint64) int {
	offset -= sovWinners(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Winners) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovWinners(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovWinners(uint64(m.Id))
	}
	l = len(m.AddressString)
	if l > 0 {
		n += 1 + l + sovWinners(uint64(l))
	}
	l = len(m.PoolNo)
	if l > 0 {
		n += 1 + l + sovWinners(uint64(l))
	}
	l = len(m.Winnings)
	if l > 0 {
		n += 1 + l + sovWinners(uint64(l))
	}
	return n
}

func sovWinners(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozWinners(x uint64) (n int) {
	return sovWinners(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Winners) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowWinners
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
			return fmt.Errorf("proto: Winners: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Winners: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWinners
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWinners
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWinners
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWinners
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AddressString", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWinners
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWinners
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWinners
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AddressString = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PoolNo", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWinners
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWinners
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWinners
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PoolNo = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Winnings", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowWinners
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthWinners
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthWinners
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Winnings = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipWinners(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthWinners
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
func skipWinners(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowWinners
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
					return 0, ErrIntOverflowWinners
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
					return 0, ErrIntOverflowWinners
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
				return 0, ErrInvalidLengthWinners
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupWinners
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthWinners
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthWinners        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowWinners          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupWinners = fmt.Errorf("proto: unexpected end of group")
)