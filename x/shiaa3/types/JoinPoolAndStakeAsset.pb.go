// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: shiaa3/JoinPoolAndStakeAsset.proto

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

type JoinPoolAndStakeAsset struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id          uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	PoolNo      string `protobuf:"bytes,3,opt,name=PoolNo,proto3" json:"PoolNo,omitempty"`
	AssetSerial string `protobuf:"bytes,4,opt,name=AssetSerial,proto3" json:"AssetSerial,omitempty"`
}

func (m *JoinPoolAndStakeAsset) Reset()         { *m = JoinPoolAndStakeAsset{} }
func (m *JoinPoolAndStakeAsset) String() string { return proto.CompactTextString(m) }
func (*JoinPoolAndStakeAsset) ProtoMessage()    {}
func (*JoinPoolAndStakeAsset) Descriptor() ([]byte, []int) {
	return fileDescriptor_26e3c3335229838b, []int{0}
}
func (m *JoinPoolAndStakeAsset) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *JoinPoolAndStakeAsset) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_JoinPoolAndStakeAsset.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *JoinPoolAndStakeAsset) XXX_Merge(src proto.Message) {
	xxx_messageInfo_JoinPoolAndStakeAsset.Merge(m, src)
}
func (m *JoinPoolAndStakeAsset) XXX_Size() int {
	return m.Size()
}
func (m *JoinPoolAndStakeAsset) XXX_DiscardUnknown() {
	xxx_messageInfo_JoinPoolAndStakeAsset.DiscardUnknown(m)
}

var xxx_messageInfo_JoinPoolAndStakeAsset proto.InternalMessageInfo

func (m *JoinPoolAndStakeAsset) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *JoinPoolAndStakeAsset) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *JoinPoolAndStakeAsset) GetPoolNo() string {
	if m != nil {
		return m.PoolNo
	}
	return ""
}

func (m *JoinPoolAndStakeAsset) GetAssetSerial() string {
	if m != nil {
		return m.AssetSerial
	}
	return ""
}

func init() {
	proto.RegisterType((*JoinPoolAndStakeAsset)(nil), "sap200.shiaa3.shiaa3.JoinPoolAndStakeAsset")
}

func init() {
	proto.RegisterFile("shiaa3/JoinPoolAndStakeAsset.proto", fileDescriptor_26e3c3335229838b)
}

var fileDescriptor_26e3c3335229838b = []byte{
	// 218 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x52, 0x2a, 0xce, 0xc8, 0x4c,
	0x4c, 0x34, 0xd6, 0xf7, 0xca, 0xcf, 0xcc, 0x0b, 0xc8, 0xcf, 0xcf, 0x71, 0xcc, 0x4b, 0x09, 0x2e,
	0x49, 0xcc, 0x4e, 0x75, 0x2c, 0x2e, 0x4e, 0x2d, 0xd1, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x12,
	0x29, 0x4e, 0x2c, 0x30, 0x32, 0x30, 0xd0, 0x83, 0x28, 0x85, 0x52, 0x52, 0x22, 0xe9, 0xf9, 0xe9,
	0xf9, 0x60, 0x05, 0xfa, 0x20, 0x16, 0x44, 0xad, 0x52, 0x35, 0x97, 0x28, 0x56, 0xa3, 0x84, 0x24,
	0xb8, 0xd8, 0x93, 0x8b, 0x52, 0x13, 0x4b, 0xf2, 0x8b, 0x24, 0x18, 0x15, 0x18, 0x35, 0x38, 0x83,
	0x60, 0x5c, 0x21, 0x3e, 0x2e, 0xa6, 0xcc, 0x14, 0x09, 0x26, 0x05, 0x46, 0x0d, 0x96, 0x20, 0xa6,
	0xcc, 0x14, 0x21, 0x31, 0x2e, 0x36, 0x90, 0x76, 0xbf, 0x7c, 0x09, 0x66, 0xb0, 0x42, 0x28, 0x4f,
	0x48, 0x81, 0x8b, 0x1b, 0x6c, 0x54, 0x70, 0x6a, 0x51, 0x66, 0x62, 0x8e, 0x04, 0x0b, 0x58, 0x12,
	0x59, 0xc8, 0xc9, 0xf1, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f, 0x3c, 0x92, 0x63,
	0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18, 0xa2, 0xd4, 0xd3,
	0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0x21, 0xbe, 0xd1, 0x87, 0x7a, 0xbc,
	0x02, 0xc6, 0x28, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0x7b, 0xc3, 0x18, 0x10, 0x00, 0x00,
	0xff, 0xff, 0x43, 0x6b, 0x70, 0x2f, 0x18, 0x01, 0x00, 0x00,
}

func (m *JoinPoolAndStakeAsset) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *JoinPoolAndStakeAsset) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *JoinPoolAndStakeAsset) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.AssetSerial) > 0 {
		i -= len(m.AssetSerial)
		copy(dAtA[i:], m.AssetSerial)
		i = encodeVarintJoinPoolAndStakeAsset(dAtA, i, uint64(len(m.AssetSerial)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.PoolNo) > 0 {
		i -= len(m.PoolNo)
		copy(dAtA[i:], m.PoolNo)
		i = encodeVarintJoinPoolAndStakeAsset(dAtA, i, uint64(len(m.PoolNo)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintJoinPoolAndStakeAsset(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintJoinPoolAndStakeAsset(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintJoinPoolAndStakeAsset(dAtA []byte, offset int, v uint64) int {
	offset -= sovJoinPoolAndStakeAsset(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *JoinPoolAndStakeAsset) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovJoinPoolAndStakeAsset(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovJoinPoolAndStakeAsset(uint64(m.Id))
	}
	l = len(m.PoolNo)
	if l > 0 {
		n += 1 + l + sovJoinPoolAndStakeAsset(uint64(l))
	}
	l = len(m.AssetSerial)
	if l > 0 {
		n += 1 + l + sovJoinPoolAndStakeAsset(uint64(l))
	}
	return n
}

func sovJoinPoolAndStakeAsset(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozJoinPoolAndStakeAsset(x uint64) (n int) {
	return sovJoinPoolAndStakeAsset(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *JoinPoolAndStakeAsset) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowJoinPoolAndStakeAsset
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
			return fmt.Errorf("proto: JoinPoolAndStakeAsset: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: JoinPoolAndStakeAsset: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowJoinPoolAndStakeAsset
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
				return ErrInvalidLengthJoinPoolAndStakeAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthJoinPoolAndStakeAsset
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
					return ErrIntOverflowJoinPoolAndStakeAsset
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
				return fmt.Errorf("proto: wrong wireType = %d for field PoolNo", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowJoinPoolAndStakeAsset
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
				return ErrInvalidLengthJoinPoolAndStakeAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthJoinPoolAndStakeAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PoolNo = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AssetSerial", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowJoinPoolAndStakeAsset
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
				return ErrInvalidLengthJoinPoolAndStakeAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthJoinPoolAndStakeAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AssetSerial = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipJoinPoolAndStakeAsset(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthJoinPoolAndStakeAsset
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
func skipJoinPoolAndStakeAsset(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowJoinPoolAndStakeAsset
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
					return 0, ErrIntOverflowJoinPoolAndStakeAsset
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
					return 0, ErrIntOverflowJoinPoolAndStakeAsset
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
				return 0, ErrInvalidLengthJoinPoolAndStakeAsset
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupJoinPoolAndStakeAsset
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthJoinPoolAndStakeAsset
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthJoinPoolAndStakeAsset        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowJoinPoolAndStakeAsset          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupJoinPoolAndStakeAsset = fmt.Errorf("proto: unexpected end of group")
)
