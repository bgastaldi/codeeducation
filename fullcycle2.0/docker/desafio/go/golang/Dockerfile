FROM golang:alpine AS builder
WORKDIR /go
COPY . .
RUN GOOS=linux go build ./fullcycle.go

FROM scratch
COPY --from=builder /go /
ENTRYPOINT ["/fullcycle"]


