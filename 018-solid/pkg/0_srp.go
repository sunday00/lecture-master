package pkg

import "fmt"

func (p Pkg) Srp() {
	r := FinanceReport{"August Report"}
	//r.SendReport("Thomson")

	rs := ReportSender{"Thomson"}
	rs.SendReport(&r)
}

//type FinanceReport struct {
//	report string
//}
//
//func (f *FinanceReport) SendReport(email string) {
//	fmt.Printf("send %s to %s sent.", f.report, email)
//}
//
//type MarketingReport struct {
//	report string
//}
//
//func (m *MarketingReport) SendReport(email string) {
//	fmt.Printf("send %s to %s sent.", m.report, email)
//}

type Report interface {
	Report() string
}

type FinanceReport struct {
	report string
}

func (f *FinanceReport) Report() string {
	return f.report
}

type MarketingReport struct {
	report string
}

func (m *MarketingReport) Report() string {
	return m.report
}

type ReportSender struct {
	to string
}

func (s *ReportSender) SendReport(report Report) {
	fmt.Printf("send %s to %s sent.", s.to, report.Report())
}
