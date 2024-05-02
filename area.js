<script>
        function convertArea() {
                var Area = parseFloat(document.getElementById('Area').value);

                var meter = length;
                var feet = length * 3.28084;
                var yards = length * 1.09361;
                var centimeters = length * 100;

                document.getElementById('resultMeter').innerText = meter.toFixed(2) + " meter";
                document.getElementById('resultFeet').innerText = feet.toFixed(2) + " feet";
                document.getElementById('resultYards').innerText = yards.toFixed(2) + " yards";
                document.getElementById('resultCentimeters').innerText = centimeters.toFixed(2) + " centimeters";
        }
</script>