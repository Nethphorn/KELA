Set-Location 'D:\School\Extra\KELA\KELA'
$job = Start-Job { Set-Location 'D:\School\Extra\KELA\KELA'; npx vite preview --port 4175 }
Start-Sleep -Seconds 7
try {
  $r = Invoke-WebRequest -Uri 'http://localhost:4175/' -UseBasicParsing
  Write-Output ('STATUS=' + $r.StatusCode)
  Write-Output ($r.Content.Substring(0, [Math]::Min(500, $r.Content.Length)))
} catch {
  Write-Output ('ERR=' + $_.Exception.Message)
} finally {
  Stop-Job $job
  Remove-Job $job -Force
}
