// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: assets/Asset.proto

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

type Asset struct {
	Creator   string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id        uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Serial    string `protobuf:"bytes,3,opt,name=Serial,proto3" json:"Serial,omitempty"`
	Name      string `protobuf:"bytes,4,opt,name=Name,proto3" json:"Name,omitempty"`
	AssetType int32  `protobuf:"varint,5,opt,name=AssetType,proto3" json:"AssetType,omitempty"`
	Tokens    int32  `protobuf:"varint,6,opt,name=Tokens,proto3" json:"Tokens,omitempty"`
	Owner     string `protobuf:"bytes,7,opt,name=Owner,proto3" json:"Owner,omitempty"`
}

func (m *Asset) Reset()         { *m = Asset{} }
func (m *Asset) String() string { return proto.CompactTextString(m) }
func (*Asset) ProtoMessage()    {}
func (*Asset) Descriptor() ([]byte, []int) {
	return fileDescriptor_af873d01ce00c34c, []int{0}
}
func (m *Asset) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Asset) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Asset.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Asset) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Asset.Merge(m, src)
}
func (m *Asset) XXX_Size() int {
	return m.Size()
}
func (m *Asset) XXX_DiscardUnknown() {
	xxx_messageInfo_Asset.DiscardUnknown(m)
}

var xxx_messageInfo_Asset proto.InternalMessageInfo

func (m *Asset) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Asset) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Asset) GetSerial() string {
	if m != nil {
		return m.Serial
	}
	return ""
}

func (m *Asset) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Asset) GetAssetType() int32 {
	if m != nil {
		return m.AssetType
	}
	return 0
}

func (m *Asset) GetTokens() int32 {
	if m != nil {
		return m.Tokens
	}
	return 0
}

func (m *Asset) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func init() {
	proto.RegisterType((*Asset)(nil), "sap200.shiaa3.assets.Asset")
}

func init() { proto.RegisterFile("assets/Asset.proto", fileDescriptor_af873d01ce00c34c) }

var fileDescriptor_af873d01ce00c34c = []byte{
	// 254 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x44, 0x90, 0x31, 0x4e, 0xc3, 0x30,
	0x14, 0x86, 0xe3, 0x90, 0xa4, 0xaa, 0x07, 0x86, 0xa7, 0x08, 0x59, 0x08, 0x59, 0x11, 0x0b, 0x99,
	0xe2, 0x8a, 0x9e, 0xa0, 0x1c, 0x00, 0xa4, 0xd0, 0x89, 0xcd, 0x6d, 0xad, 0xd4, 0x82, 0xd6, 0x91,
	0x6d, 0x04, 0xbd, 0x05, 0xd7, 0xe0, 0x26, 0x8c, 0x19, 0x19, 0x51, 0x72, 0x11, 0x94, 0xe7, 0x20,
	0x26, 0xbf, 0xef, 0xf9, 0xf3, 0x2f, 0xfd, 0xa6, 0x20, 0x9d, 0x53, 0xde, 0x89, 0xd5, 0x78, 0x54,
	0xad, 0x35, 0xde, 0x40, 0xee, 0x64, 0x7b, 0xbb, 0x58, 0x54, 0x6e, 0xaf, 0xa5, 0x5c, 0x56, 0xc1,
	0xb8, 0xcc, 0x1b, 0xd3, 0x18, 0x14, 0xc4, 0x38, 0x05, 0xf7, 0xfa, 0x93, 0xd0, 0x14, 0xdf, 0x02,
	0xa3, 0xb3, 0xad, 0x55, 0xd2, 0x1b, 0xcb, 0x48, 0x41, 0xca, 0x79, 0xfd, 0x87, 0x70, 0x4e, 0x63,
	0xbd, 0x63, 0x71, 0x41, 0xca, 0xa4, 0x8e, 0xf5, 0x0e, 0x2e, 0x68, 0xf6, 0xa8, 0xac, 0x96, 0x2f,
	0xec, 0x0c, 0xc5, 0x89, 0x00, 0x68, 0x72, 0x2f, 0x0f, 0x8a, 0x25, 0xb8, 0xc5, 0x19, 0xae, 0xe8,
	0x1c, 0xe3, 0xd7, 0xa7, 0x56, 0xb1, 0xb4, 0x20, 0x65, 0x5a, 0xff, 0x2f, 0xc6, 0xa4, 0xb5, 0x79,
	0x56, 0x47, 0xc7, 0x32, 0xbc, 0x9a, 0x08, 0x72, 0x9a, 0x3e, 0xbc, 0x1d, 0x95, 0x65, 0x33, 0x8c,
	0x0a, 0x70, 0xb7, 0xfa, 0xea, 0x39, 0xe9, 0x7a, 0x4e, 0x7e, 0x7a, 0x4e, 0x3e, 0x06, 0x1e, 0x75,
	0x03, 0x8f, 0xbe, 0x07, 0x1e, 0x3d, 0xdd, 0x34, 0xda, 0xef, 0x5f, 0x37, 0xd5, 0xd6, 0x1c, 0x44,
	0x28, 0x2f, 0x42, 0x79, 0xf1, 0x2e, 0xa6, 0x0f, 0xf2, 0xa7, 0x56, 0xb9, 0x4d, 0x86, 0xad, 0x97,
	0xbf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x02, 0x63, 0x18, 0x9d, 0x37, 0x01, 0x00, 0x00,
}

func (m *Asset) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Asset) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Asset) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintAsset(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x3a
	}
	if m.Tokens != 0 {
		i = encodeVarintAsset(dAtA, i, uint64(m.Tokens))
		i--
		dAtA[i] = 0x30
	}
	if m.AssetType != 0 {
		i = encodeVarintAsset(dAtA, i, uint64(m.AssetType))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintAsset(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Serial) > 0 {
		i -= len(m.Serial)
		copy(dAtA[i:], m.Serial)
		i = encodeVarintAsset(dAtA, i, uint64(len(m.Serial)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintAsset(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintAsset(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintAsset(dAtA []byte, offset int, v uint64) int {
	offset -= sovAsset(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Asset) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovAsset(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovAsset(uint64(m.Id))
	}
	l = len(m.Serial)
	if l > 0 {
		n += 1 + l + sovAsset(uint64(l))
	}
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovAsset(uint64(l))
	}
	if m.AssetType != 0 {
		n += 1 + sovAsset(uint64(m.AssetType))
	}
	if m.Tokens != 0 {
		n += 1 + sovAsset(uint64(m.Tokens))
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovAsset(uint64(l))
	}
	return n
}

func sovAsset(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozAsset(x uint64) (n int) {
	return sovAsset(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Asset) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowAsset
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
			return fmt.Errorf("proto: Asset: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Asset: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
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
				return ErrInvalidLengthAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAsset
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
					return ErrIntOverflowAsset
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
				return fmt.Errorf("proto: wrong wireType = %d for field Serial", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
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
				return ErrInvalidLengthAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Serial = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
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
				return ErrInvalidLengthAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field AssetType", wireType)
			}
			m.AssetType = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.AssetType |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tokens", wireType)
			}
			m.Tokens = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Tokens |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowAsset
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
				return ErrInvalidLengthAsset
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthAsset
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipAsset(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthAsset
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
func skipAsset(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowAsset
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
					return 0, ErrIntOverflowAsset
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
					return 0, ErrIntOverflowAsset
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
				return 0, ErrInvalidLengthAsset
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupAsset
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthAsset
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthAsset        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowAsset          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupAsset = fmt.Errorf("proto: unexpected end of group")
)
