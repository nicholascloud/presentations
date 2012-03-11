using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SQLite;
using System.Linq;

namespace PrizePick {
    public class PrizeQuery : IDisposable {
        private bool _isDisposed = false;
        private const string CONN_STR = @"Data Source=|DataDirectory|JessicaData.s3db;Version=3;New=False;Compress=True;";
        private readonly SQLiteConnection _conn;

        public PrizeQuery() {
            _conn = new SQLiteConnection(CONN_STR);
        }

        public IEnumerable<Prize> Fetch() {
            var prizes = new List<Prize>();

            try {
                _conn.Open();
                using (var cmd = _conn.CreateCommand()) {
                    cmd.CommandText = "select * from Prizes where AwardedAt is null;";
                    using (var reader = cmd.ExecuteReader()) {
                        while (reader.Read()) {
                            Prize prize = ReadPrize(reader);
                            prizes.Add(prize);
                        }
                    }
                }
            } finally {
                _conn.Close();
            }

            return prizes;
        }

        public void Award(int prizeID) {
            try {
                _conn.Open();
                using (var cmd = _conn.CreateCommand()) {
                    cmd.CommandText = "update Prizes set AwardedAt = @awardedAt where PrizeID = @prizeID;";
                    cmd.Parameters.Add(new SQLiteParameter("@awardedAt") { Value = DateTime.Now });
                    cmd.Parameters.Add(new SQLiteParameter("@prizeID") { Value = prizeID });
                    cmd.ExecuteNonQuery();
                }
            } finally {
                _conn.Close();
            }
        }

        private static Prize ReadPrize(SQLiteDataReader reader) {
            var prize = new Prize {
                PrizeID = Convert.ToInt32(reader["PrizeID"]),
                Name = reader["Name"].ToString()
            };

            DateTime awardedAt;
            if (DateTime.TryParse(reader["AwardedAt"] as String, out awardedAt)) {
                prize.AwardedAt = awardedAt;
            }
            return prize;
        }

        public void Dispose() {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing) {
            if(disposing) {
                if(!_isDisposed) {
                    try {
                        _conn.Dispose();
                    } catch(Exception) {}

                    _isDisposed = true;
                }
            }
        }
    }
}