
// This file was automatically generated by the PetaPoco T4 Template
// Do not make changes directly to this file - edit the template instead
// 
// The following connection settings were used to generate this file
// 
//     Connection String Name: `GrokMob`
//     Provider:               `System.Data.SqlClient`
//     Connection String:      `Data Source=localhost; Initial Catalog=GrokMob; Integrated Security=SSPI`
//     Schema:                 ``
//     Include Views:          `False`

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PetaPoco;

namespace GrokMob
{
	public partial class GrokMobDB : Database
	{
		public GrokMobDB() 
			: base("GrokMob")
		{
			CommonConstruct();
		}

		public GrokMobDB(string connectionStringName) 
			: base(connectionStringName)
		{
			CommonConstruct();
		}
		
		partial void CommonConstruct();
		
		public interface IFactory
		{
			GrokMobDB GetInstance();
		}
		
		public static IFactory Factory { get; set; }
        public static GrokMobDB GetInstance()
        {
			if (_instance!=null)
				return _instance;
				
			if (Factory!=null)
				return Factory.GetInstance();
			else
				return new GrokMobDB();
        }

		[ThreadStatic] static GrokMobDB _instance;
		
		public override void OnBeginTransaction()
		{
			if (_instance==null)
				_instance=this;
		}
		
		public override void OnEndTransaction()
		{
			if (_instance==this)
				_instance=null;
		}
        
		public class Record<T> where T:new()
		{
			public static GrokMobDB repo { get { return GrokMobDB.GetInstance(); } }
			public bool IsNew() { return repo.IsNew(this); }
			public object Insert() { return repo.Insert(this); }
			public int Update(IEnumerable<string> columns) { return repo.Update(this, columns); }
			public static int Update(string sql, params object[] args) { return repo.Update<T>(sql, args); }
			public static int Update(Sql sql) { return repo.Update<T>(sql); }
			public int Delete() { return repo.Delete(this); }
			public static int Delete(string sql, params object[] args) { return repo.Delete<T>(sql, args); }
			public static int Delete(Sql sql) { return repo.Delete<T>(sql); }
			public static int Delete(object primaryKey) { return repo.Delete<T>(primaryKey); }
			public static bool Exists(object primaryKey) { return repo.Exists<T>(primaryKey); }
			public static T SingleOrDefault(object primaryKey) { return repo.SingleOrDefault<T>(primaryKey); }
			public static T SingleOrDefault(string sql, params object[] args) { return repo.SingleOrDefault<T>(sql, args); }
			public static T SingleOrDefault(Sql sql) { return repo.SingleOrDefault<T>(sql); }
			public static T FirstOrDefault(string sql, params object[] args) { return repo.FirstOrDefault<T>(sql, args); }
			public static T FirstOrDefault(Sql sql) { return repo.FirstOrDefault<T>(sql); }
			public static T Single(object primaryKey) { return repo.Single<T>(primaryKey); }
			public static T Single(string sql, params object[] args) { return repo.Single<T>(sql, args); }
			public static T Single(Sql sql) { return repo.Single<T>(sql); }
			public static T First(string sql, params object[] args) { return repo.First<T>(sql, args); }
			public static T First(Sql sql) { return repo.First<T>(sql); }
			public static List<T> Fetch(string sql, params object[] args) { return repo.Fetch<T>(sql, args); }
			public static List<T> Fetch(Sql sql) { return repo.Fetch<T>(sql); }
			public static List<T> Fetch(long page, long itemsPerPage, string sql, params object[] args) { return repo.Fetch<T>(page, itemsPerPage, sql, args); }
			public static List<T> Fetch(long page, long itemsPerPage, Sql sql) { return repo.Fetch<T>(page, itemsPerPage, sql); }
			public static List<T> SkipTake(long skip, long take, string sql, params object[] args) { return repo.SkipTake<T>(skip, take, sql, args); }
			public static List<T> SkipTake(long skip, long take, Sql sql) { return repo.SkipTake<T>(skip, take, sql); }
			public static Page<T> Page(long page, long itemsPerPage, string sql, params object[] args) { return repo.Page<T>(page, itemsPerPage, sql, args); }
			public static Page<T> Page(long page, long itemsPerPage, Sql sql) { return repo.Page<T>(page, itemsPerPage, sql); }
			public static IEnumerable<T> Query(string sql, params object[] args) { return repo.Query<T>(sql, args); }
			public static IEnumerable<T> Query(Sql sql) { return repo.Query<T>(sql); }
			
			private Dictionary<string,bool> ModifiedColumns;
			private void OnLoaded()
			{
				ModifiedColumns = new Dictionary<string,bool>();
			}
			protected void MarkColumnModified(string column_name)
			{
				if (ModifiedColumns!=null)
					ModifiedColumns[column_name]=true;
			}
			public int Update() 
			{ 
				if (ModifiedColumns==null)
					return repo.Update(this); 

				int retv = repo.Update(this, ModifiedColumns.Keys);
				ModifiedColumns.Clear();
				return retv;
			}
			public void Save() 
			{ 
				if (repo.IsNew(this))
					repo.Insert(this);
				else
					Update();
			}
		}
	}
	

    
	[TableName("Comment")]
	[PrimaryKey("Id", autoIncrement=false)]
	[ExplicitColumns]
    public partial class Comment : GrokMobDB.Record<Comment>  
    {
        [Column] 
		public Guid Id 
		{ 
			get
			{
				return _Id;
			}
			set
			{
				_Id = value;
				MarkColumnModified("Id");
			}
		}
		Guid _Id;

        [Column] 
		public Guid MeetingId 
		{ 
			get
			{
				return _MeetingId;
			}
			set
			{
				_MeetingId = value;
				MarkColumnModified("MeetingId");
			}
		}
		Guid _MeetingId;

        [Column] 
		public string MemberHandle 
		{ 
			get
			{
				return _MemberHandle;
			}
			set
			{
				_MemberHandle = value;
				MarkColumnModified("MemberHandle");
			}
		}
		string _MemberHandle;

        [Column] 
		public string Content 
		{ 
			get
			{
				return _Content;
			}
			set
			{
				_Content = value;
				MarkColumnModified("Content");
			}
		}
		string _Content;

        [Column] 
		public DateTime CreatedAt 
		{ 
			get
			{
				return _CreatedAt;
			}
			set
			{
				_CreatedAt = value;
				MarkColumnModified("CreatedAt");
			}
		}
		DateTime _CreatedAt;

	}
    
	[TableName("Stat")]
	[PrimaryKey("Id", autoIncrement=false)]
	[ExplicitColumns]
    public partial class Stat : GrokMobDB.Record<Stat>  
    {
        [Column] 
		public Guid Id 
		{ 
			get
			{
				return _Id;
			}
			set
			{
				_Id = value;
				MarkColumnModified("Id");
			}
		}
		Guid _Id;

        [Column] 
		public string Moniker 
		{ 
			get
			{
				return _Moniker;
			}
			set
			{
				_Moniker = value;
				MarkColumnModified("Moniker");
			}
		}
		string _Moniker;

        [Column] 
		public string Label 
		{ 
			get
			{
				return _Label;
			}
			set
			{
				_Label = value;
				MarkColumnModified("Label");
			}
		}
		string _Label;

        [Column] 
		public int Value 
		{ 
			get
			{
				return _Value;
			}
			set
			{
				_Value = value;
				MarkColumnModified("Value");
			}
		}
		int _Value;

	}
    
	[TableName("Venue")]
	[PrimaryKey("Id", autoIncrement=false)]
	[ExplicitColumns]
    public partial class Venue : GrokMobDB.Record<Venue>  
    {
        [Column] 
		public Guid Id 
		{ 
			get
			{
				return _Id;
			}
			set
			{
				_Id = value;
				MarkColumnModified("Id");
			}
		}
		Guid _Id;

        [Column] 
		public string Name 
		{ 
			get
			{
				return _Name;
			}
			set
			{
				_Name = value;
				MarkColumnModified("Name");
			}
		}
		string _Name;

        [Column] 
		public string Address 
		{ 
			get
			{
				return _Address;
			}
			set
			{
				_Address = value;
				MarkColumnModified("Address");
			}
		}
		string _Address;

	}
    
	[TableName("VersionInfo")]
	[ExplicitColumns]
    public partial class VersionInfo : GrokMobDB.Record<VersionInfo>  
    {
        [Column] 
		public long Version 
		{ 
			get
			{
				return _Version;
			}
			set
			{
				_Version = value;
				MarkColumnModified("Version");
			}
		}
		long _Version;

	}
    
	[TableName("Meeting")]
	[PrimaryKey("Id", autoIncrement=false)]
	[ExplicitColumns]
    public partial class Meeting : GrokMobDB.Record<Meeting>  
    {
        [Column] 
		public Guid Id 
		{ 
			get
			{
				return _Id;
			}
			set
			{
				_Id = value;
				MarkColumnModified("Id");
			}
		}
		Guid _Id;

        [Column] 
		public string Title 
		{ 
			get
			{
				return _Title;
			}
			set
			{
				_Title = value;
				MarkColumnModified("Title");
			}
		}
		string _Title;

        [Column] 
		public string Description 
		{ 
			get
			{
				return _Description;
			}
			set
			{
				_Description = value;
				MarkColumnModified("Description");
			}
		}
		string _Description;

        [Column] 
		public DateTime ScheduledFor 
		{ 
			get
			{
				return _ScheduledFor;
			}
			set
			{
				_ScheduledFor = value;
				MarkColumnModified("ScheduledFor");
			}
		}
		DateTime _ScheduledFor;

        [Column] 
		public string Location 
		{ 
			get
			{
				return _Location;
			}
			set
			{
				_Location = value;
				MarkColumnModified("Location");
			}
		}
		string _Location;

	}
}


