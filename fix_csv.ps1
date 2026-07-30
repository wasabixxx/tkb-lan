$csvContent = @"
STT,Môn học,Lớp,Số tín chỉ,Hình thức,Số tiết LT,Số tiết TH,Nhóm,Thời gian,Giảng viên,Thứ 2,Thứ 3,Thứ 4,Thứ 5,Thứ 6,Thứ 7
1,Hệ thống thông tin kế toán,ĐH13KE2,3,LT,45,0,1,03/08 - 09/08/26,LÊ THỊ HẠNH (15.179.GV),"4,5 (A.202)","6,7,8 (A.202)",,,,
2,Hệ thống thông tin kế toán,ĐH13KE2,3,LT,45,0,1,03/08 - 09/08/26,NGUYỄN CÔNG THỊ ĐOAN TRANG (15.216.TG),,"1,2,3 (A.202)","9,10 (A.202)",,,,
3,Hệ thống thông tin kế toán,ĐH13KE2,3,LT,45,0,3,10/08 - 30/08/26,LÊ THỊ HẠNH (15.179.GV),,"6,7,8 (A.202)","9,10 (A.202)",,,,
4,Hệ thống thông tin kế toán,ĐH13KE2,3,LT,45,0,4,07/09 - 04/10/26,LÊ THỊ HẠNH (15.179.GV),,"6,7,8 (A.202)","9,10 (A.202)",,,,
5,Kế toán chi phí,ĐH13KE2,3,LT,45,0,9,03/08 - 04/10/26,"LÊ THỊ THU HUYỀN (15.122.GV); NGUYỄN HOÀN (15.020.GVC)",,,,"6,7,8 (A.202)","9,10 (A.202)",
6,Kế toán doanh nghiệp thương mại dịch vụ,ĐH13KE2,3,LT,45,0,1,03/08 - 09/08/26,TRẦN THỊ XUÂN (15.234.TG),"1,2,3; 6,7,8 (A.202; A.202)","9,10 (A.202)","4,5 (A.202)",,,,
7,Kế toán doanh nghiệp thương mại dịch vụ,ĐH13KE2,3,LT,45,0,3,10/08 - 30/08/26,TRẦN THỊ XUÂN (15.234.TG),"6,7,8 (A.202)","9,10 (A.202)",,,,,
8,Kế toán doanh nghiệp thương mại dịch vụ,ĐH13KE2,3,LT,45,0,4,07/09 - 04/10/26,TRẦN THỊ XUÂN (15.234.TG),"6,7,8 (A.202)","9,10 (A.202)",,,,,
9,Kế toán ngân hàng,ĐH13KE2,3,LT,45,0,9,03/08 - 04/10/26,NGUYỄN THỊ VÂN (15.240.TG),,,,"9,10 (A.202)","6,7,8 (A.202)",
10,Kế toán quốc tế,ĐH13KE2,3,LT,45,0,1,03/08 - 09/08/26,LÊ THỊ HẠNH (15.179.GV),"9,10 (A.202)",,"1,2,3 (A.202)",,,,
11,Kế toán quốc tế,ĐH13KE2,3,LT,45,0,1,03/08 - 09/08/26,NGUYỄN CÔNG THỊ ĐOAN TRANG (15.216.TG),,"4,5 (A.202)","6,7,8 (A.202)",,,,
12,Kế toán quốc tế,ĐH13KE2,3,LT,45,0,3,10/08 - 30/08/26,LÊ THỊ HẠNH (15.179.GV),"9,10 (A.202)",,"6,7,8 (A.202)",,,,
13,Kế toán quốc tế,ĐH13KE2,3,LT,45,0,4,07/09 - 04/10/26,LÊ THỊ HẠNH (15.179.GV),"9,10 (A.202)",,"6,7,8 (A.202)",,,,
"@

$utf8Encoding = New-Object System.Text.UTF8Encoding $true
[System.IO.File]::WriteAllText("c:\Github\tkb-lan\tkb_doi_chieu.csv", $csvContent, $utf8Encoding)

# Also create Excel TSV file tkb_doi_chieu.tsv with UTF-16LE BOM for 100% Excel compatibility
$tsvContent = $csvContent.Replace(',', "`t")
$utf16Encoding = [System.Text.Encoding]::Unicode
[System.IO.File]::WriteAllText("c:\Github\tkb-lan\tkb_doi_chieu.tsv", $tsvContent, $utf16Encoding)
