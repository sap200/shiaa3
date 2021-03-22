package types

import (
	"fmt"
	"math"
	"math/rand"
	"sort"
	"strconv"
	"time"
)

type Shai struct {
	ID         string
	DataPoints []float64
	Length     int
}

func NewShai(id string) Shai {
	shai := Shai{
		ID:         id,
		DataPoints: []float64{},
		Length:     0,
	}

	return shai
}

func (shai *Shai) generateSample(n int) {
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < n; i++ {
		r := rand.Float64()
		i := fmt.Sprintf("%.5f", r)
		f, _ := strconv.ParseFloat(i, 10)
		shai.DataPoints = append(shai.DataPoints, f)
	}

	shai.Length += n
}

func (shai *Shai) PlayASet() {
	setLength := 20
	shai.generateSample(setLength)
}

func (shai Shai) mean() float64 {
	dataArray := shai.DataPoints
	len := shai.Length

	var sum float64

	for i := 0; i < len; i++ {
		sum += dataArray[i]
	}

	m := sum / float64(len)

	return m
}

func (shai Shai) median() float64 {
	dataArray := shai.DataPoints
	len := shai.Length

	sort.Float64s(dataArray)
	medianPosition := int(len / 2)

	var med float64

	if len%2 != 0 { // that is it is odd
		med = dataArray[medianPosition]
	} else {
		val1 := dataArray[medianPosition]
		val2 := dataArray[medianPosition]
		med = (val1 + val2) / 2.0
	}

	return med
}

func (shai Shai) mode() float64 {
	dataArray := shai.DataPoints
	len := shai.Length

	frequencyArray := []int{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
	indexMap := map[float64]int{0.0: 0, 0.1: 1, 0.2: 2, 0.3: 3, 0.4: 4, 0.5: 5, 0.6: 6, 0.7: 7, 0.8: 8, 0.9: 9, 1.0: 10}
	valueMap := map[int]float64{0: 0.0, 1: 0.1, 2: 0.2, 3: 0.3, 4: 0.4, 5: 0.5, 6: 0.6, 7: 0.7, 8: 0.8, 9: 0.9, 10: 1.0}

	for i := 0; i < len; i++ {
		index := indexMap[dataArray[i]]
		frequencyArray[index]++
	}

	// get Max Frequency
	maxFreqInd := getMaxFrequencyIndex(frequencyArray)
	value := valueMap[maxFreqInd]

	return value
}

func getMaxFrequencyIndex(is []int) int {
	maxIndex := 0
	for i := 0; i < len(is); i++ {
		if is[i] > maxIndex {
			maxIndex = i
		}
	}

	return maxIndex
}

func (shai Shai) GetLambdaValue() float64 {
	mean := shai.mean()
	median := shai.median()
	mode := shai.mode()

	mean_minus_median := math.Abs(mean - median)
	mean_minus_mode := math.Abs(mean - mean)
	median_minus_mode := math.Abs(median - mode)

	lambda := mean_minus_median + mean_minus_mode + median_minus_mode
	return lambda
}

func ShaiWinner(shais ...Shai) Shai {
	leastLambda := shais[0].GetLambdaValue()
	leastShai := shais[0]
	for _, shai := range shais {
		lambda := shai.GetLambdaValue()
		if lambda < leastLambda {
			leastLambda = lambda
			leastShai = shai
		}
	}

	return leastShai
}

func (shai *Shai) PlayPentate() {
	for i := 0; i < 5; i++ {
		shai.PlayASet()
	}
}
