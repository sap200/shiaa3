// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: assets/TimedOutAsset.proto

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

type TimedOutAsset struct {
	Creator     string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id          uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	AssetSerial string `protobuf:"bytes,3,opt,name=AssetSerial,proto3" json:"AssetSerial,omitempty"`
	Receiver    string `protobuf:"bytes,4,opt,name=Receiver,proto3" json:"Receiver,omitempty"`
	TargetChain string `protobuf:"bytes,5,opt,name=TargetChain,proto3" json:"TargetChain,omitempty"`
}

func (m *TimedOutAsset) Reset()         { *m = TimedOutAsset{} }
func (m *TimedOutAsset) String() string { return proto.CompactTextString(m) }
func (*TimedOutAsset) ProtoMessage()    {}
func (*TimedOutAsset) Descriptor() ([]byte, []int) {
	return fileDescriptor_3b2ecf071ffdf695, []int{0}
}
func (m *TimedOutAsset) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *TimedOutAsset) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_TimedOutAsset.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *TimedOutAsset) XXX_Merge(src proto.Message) {
	xxx_messageInfo_TimedOutAsset.Merge(m, src)
}
func (m *TimedOutAsset) XXX_Size() int {
	return m.Size()
}
func (m *TimedOutAsset) XXX_DiscardUnknown() {
	xxx_messageInfo_TimedOutAsset.DiscardUnknown(m)
}

var xxx_messageInfo_TimedOutAsset proto.InternalMessageInfo

func (m *TimedOutAsset) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *TimedOutAsset) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *TimedOutAsset) GetAssetSerial() string {
	if m != nil {
		return m.AssetSerial
	}
	return ""
}

func (m *TimedOutAsset) GetReceiver() string {
	if m != nil {
		return m.Receiver
	}
	return ""
}

func (m *TimedOutAsset) GetTargetChain() string {
	if m != nil {
		return m.TargetChain
	}
	return ""
}

func init() {
	proto.RegisterType((*TimedOutAsset)(nil), "sap200.shiaa3.assets.TimedOutAsset")
}

func init() { proto.RegisterFile("assets/TimedOutAsset.proto", fileDescriptor_3b2ecf071ffdf695) }

var fileDescriptor_3b2ecf071ffdf695 = []byte{
	// 240 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x4a, 0x2c, 0x2e, 0x4e,
	0x2d, 0x29, 0xd6, 0x0f, 0xc9, 0xcc, 0x4d, 0x4d, 0xf1, 0x2f, 0x2d, 0x71, 0x04, 0x71, 0xf5, 0x0a,
	0x8a, 0xf2, 0x4b, 0xf2, 0x85, 0x44, 0x8a, 0x13, 0x0b, 0x8c, 0x0c, 0x0c, 0xf4, 0x8a, 0x33, 0x32,
	0x13, 0x13, 0x8d, 0xf5, 0x20, 0x2a, 0xa5, 0x44, 0xd2, 0xf3, 0xd3, 0xf3, 0xc1, 0x0a, 0xf4, 0x41,
	0x2c, 0x88, 0x5a, 0xa5, 0x99, 0x8c, 0x5c, 0xbc, 0x28, 0x66, 0x08, 0x49, 0x70, 0xb1, 0x27, 0x17,
	0xa5, 0x26, 0x96, 0xe4, 0x17, 0x49, 0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0xc1, 0xb8, 0x42, 0x7c,
	0x5c, 0x4c, 0x99, 0x29, 0x12, 0x4c, 0x0a, 0x8c, 0x1a, 0x2c, 0x41, 0x4c, 0x99, 0x29, 0x42, 0x0a,
	0x5c, 0xdc, 0x60, 0x2d, 0xc1, 0xa9, 0x45, 0x99, 0x89, 0x39, 0x12, 0xcc, 0x60, 0xd5, 0xc8, 0x42,
	0x42, 0x52, 0x5c, 0x1c, 0x41, 0xa9, 0xc9, 0xa9, 0x99, 0x65, 0xa9, 0x45, 0x12, 0x2c, 0x60, 0x69,
	0x38, 0x1f, 0xa4, 0x3b, 0x24, 0xb1, 0x28, 0x3d, 0xb5, 0xc4, 0x39, 0x23, 0x31, 0x33, 0x4f, 0x82,
	0x15, 0xa2, 0x1b, 0x49, 0xc8, 0xc9, 0xf1, 0xc4, 0x23, 0x39, 0xc6, 0x0b, 0x8f, 0xe4, 0x18, 0x1f,
	0x3c, 0x92, 0x63, 0x9c, 0xf0, 0x58, 0x8e, 0xe1, 0xc2, 0x63, 0x39, 0x86, 0x1b, 0x8f, 0xe5, 0x18,
	0xa2, 0xd4, 0xd3, 0x33, 0x4b, 0x32, 0x4a, 0x93, 0xf4, 0x92, 0xf3, 0x73, 0xf5, 0x21, 0x9e, 0xd5,
	0x87, 0x78, 0x56, 0xbf, 0x42, 0x1f, 0x1a, 0x30, 0x25, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0x60,
	0x5f, 0x1a, 0x03, 0x02, 0x00, 0x00, 0xff, 0xff, 0xf6, 0x52, 0x23, 0x7c, 0x2f, 0x01, 0x00, 0x00,
}

func (m *TimedOutAsset) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *TimedOutAsset) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *TimedOutAsset) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TargetChain) > 0 {
		i -= len(m.TargetChain)
		copy(dAtA[i:], m.TargetChain)
		i = encodeVarintTimedOutAsset(dAtA, i, uint64(len(m.TargetChain)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.Receiver) > 0 {
		i -= len(m.Receiver)
		copy(dAtA[i:], m.Receiver)
		i = encodeVarintTimedOutAsset(dAtA, i, uint64(len(m.Receiver)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.AssetSerial) > 0 {
		i -= len(m.AssetSerial)
		copy(dAtA[i:], m.AssetSerial)
		i = encodeVarintTimedOutAsset(dAtA, i, uint64(len(m.AssetSerial)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintTimedOutAsset(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintTimedOutAsset(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintTimedOutAsset(dAtA []byte, offset int, v uint64) int {
	offset -= sovTimedOutAsset(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *TimedOutAsset) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovTimedOutAsset(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovTimedOutAsset(uint64(m.Id))
	}
	l = len(m.AssetSerial)
	if l > 0 {
		n += 1 + l + sovTimedOutAsset(uint64(l))
	}
	l = len(m.Receiver)
	if l > 0 {
		n += 1 + l + sovTimedOutAsset(uint64(l))
	}
	l = len(m.TargetChain)
	if l > 0 {
		n += 1 + l + sovTimedOutAsset(uint64(l))
	}
	return n
}

func sovTimedOutAsset(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozTimedOutAsset(x uint64) (n int) {
	return sovTimedOutAsset(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *TimedOutAsset) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowTimedOutAsset
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
			return fmt.Errorf("proto: TimedOutAsset: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: TimedOutAsset: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedOutAsset
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
				return ErrInvalidLengthTimedOutAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimedOutAsset
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
					return ErrIntOverflowTimedOutAsset
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
				return fmt.Errorf("proto: wrong wireType = %d for field AssetSerial", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedOutAsset
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
				return ErrInvalidLengthTimedOutAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimedOutAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AssetSerial = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Receiver", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedOutAsset
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
				return ErrInvalidLengthTimedOutAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimedOutAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Receiver = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TargetChain", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowTimedOutAsset
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
				return ErrInvalidLengthTimedOutAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthTimedOutAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TargetChain = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipTimedOutAsset(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthTimedOutAsset
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
func skipTimedOutAsset(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowTimedOutAsset
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
					return 0, ErrIntOverflowTimedOutAsset
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
					return 0, ErrIntOverflowTimedOutAsset
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
				return 0, ErrInvalidLengthTimedOutAsset
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupTimedOutAsset
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthTimedOutAsset
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthTimedOutAsset        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowTimedOutAsset          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupTimedOutAsset = fmt.Errorf("proto: unexpected end of group")
)
